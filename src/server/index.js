const express = require('express')
const app = express()
const path = require('path')

if (process.env.PRESENTOR) {
  var five = require("johnny-five"),
    board,
    photoresistor1,
    photoresistor2;
  var server = require('http').Server(app);
  var io = require('socket.io')(server);

  server.listen(80);
}

app.use(express.static(path.join('dist')))

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../../dist/index.html'));
});

if (process.env.PRESENTOR) {
  console.log("Presentor started ----->:");
  board = new five.Board();
  board.on("ready", function() {

    console.log('Connected to Arduino, ready.');

    io.on('connection', function (socket) {
      var crossingGatesOn = false;
      var crossingGatesTransition = false;
      var crossingGateAnimation;
      var crossingLED1 = new five.Led(7);
      var crossingLED2 = new five.Led(13);
      var lightAnimation;
      var crossingInactive = true;
      var crossingInactiveTimer;

      // Red Yellow Green
      var trafficLightEW = new five.Leds([6, 4, 2]);
      var trafficLightNS = new five.Leds([8 ,10, 12]);

      // Create a new `photoresistor` hardware instance.
      photoresistor1 = new five.Sensor({
        pin: "A0",
        freq: 250
      });

      photoresistor2 = new five.Sensor({
        pin: "A1",
        freq: 250
      });
      var EWLights = {
        green: {
          index: 2,
          isOn: true,
        },
        yellow: {
          index: 1,
          isOn: false,
        },
        red: {
          index: 0,
          isOn: false,
        }
      };

      var NSLights = {
        green: {
          index: 2,
          isOn: false,
        },
        yellow: {
          index: 1,
          isOn: false,
        },
        red: {
          index: 0,
          isOn: true,
        }
      };

      var yellowAnimation = undefined;

      var regularLightCycle = setInterval(() => {
        lightCycle(EWLights);
      }, 15000);

      var lightCycle = (lightSet, resume = true) => {
        trafficLightEW[lightSet.yellow.index].on();
        trafficLightNS[lightSet.yellow.index].on();
        trafficLightEW[lightSet.red.index].off();
        trafficLightEW[lightSet.green.index].off();
        trafficLightNS[lightSet.red.index].off();
        trafficLightNS[lightSet.green.index].off();

        clearInterval(yellowAnimation);
        yellowAnimation = undefined;
        yellowAnimation = setInterval(function() {
          if (EWLights.green.isOn) {
            trafficLightEW[lightSet.red.index].on();
            trafficLightNS[lightSet.green.index].on();
            // set configs
            EWLights.green.isOn = false;
            EWLights.red.isOn = true;
            NSLights.green.isOn = true;
            NSLights.red.isOn = false;
          } else {
            trafficLightEW[lightSet.green.index].on();
            trafficLightNS[lightSet.red.index].on();
            // set configs
            EWLights.green.isOn = true;
            EWLights.red.isOn = false;
            NSLights.green.isOn = false;
            NSLights.red.isOn = true;
          }
          clearInterval(yellowAnimation);
          yellowAnimation = undefined;
          trafficLightEW[lightSet.yellow.index].off();
          trafficLightNS[lightSet.yellow.index].off();
        }, 3000);
      }

      //Init lights
      lightCycle(EWLights);

      allRedLights = function(lightSet) {
        var yellowDelay = setInterval(function() {
          trafficLightEW[lightSet.yellow.index].off();
          trafficLightNS[lightSet.yellow.index].off();
          trafficLightEW[lightSet.red.index].on();
          trafficLightEW[lightSet.green.index].off();
          trafficLightNS[lightSet.red.index].on();
          trafficLightNS[lightSet.green.index].off();
          clearInterval(yellowDelay);
          yellowDelay = undefined;
        },3000);
      }

      var crossingGates = function() {
        if (!crossingGatesTransition && !crossingGatesOn) {
          crossingGatesTransition = true;
          crossingLED1.toggle();
          lightAnimation = setInterval(() => {
            crossingLED1.toggle();
            crossingLED2.toggle();
          }, 500);
        }

      }
      // Inject the `sensor` hardware into
      // the Repl instance's context;
      // allows direct command line access
      board.repl.inject({
        pot: photoresistor1
      });

      board.repl.inject({
        pot: photoresistor2
      });

      var turnOffGates = () => {
        crossingGatesTransition = false;
        crossingGatesOn = false;
        clearInterval(crossingGateAnimation);
        crossingGateAnimation = undefined;
        clearInterval(lightAnimation);
        lightAnimation = undefined;
        crossingLED1.off();
        crossingLED2.off();
      }

      var gateLogic = callback => {
        // reset the interval
        clearInterval(crossingGateAnimation);
        crossingGates();
        crossingGateAnimation = setInterval(function() {
          turnOffGates();
        }, 10000);
      }

      var crossingInactivity = () => {
        if (crossingInactive) {
          crossingInactive = false;
          crossingInactiveTimer = null
          crossingInactiveTimer = setTimeout(() => {
            crossingInactive = true;
            clearTimeout(crossingInactiveTimer);
            crossingInactiveTimer = null;
            socket.emit('setAnOffTimer', 1);
          }, 5000);
        }
      }

      photoresistor1.on("data", function() {
        // console.log(this.value);
          if(this.value > 700) {
            console.log('gate 1 triggered');
            socket.emit('sensorTriggered', 1);
            // crossingInactivity();
          }
      });

      photoresistor2.on("data", function() {
        //console.log(this.value);
        if(this.value > 700) {
          console.log('gate 2 triggered');
          // gateLogic('photoresistor2');
          socket.emit('sensorTriggered', 2);
          // crossingInactivity();
        }
      });

      socket.on('startLightCycle', () => {
        clearInterval(regularLightCycle);
        regularLightCycle = null;
        console.log('Trigger EW Lights');
        regularLightCycle = setInterval(() => {
          lightCycle(EWLights);
        }, 15000)
      });

      socket.on('turnGatesOn', () => {
        console.log("Gates on");
        crossingInactivity();
        crossingGates();
      });

      socket.on('stopLightCycle', () => {
        console.log('stop light cycle');
        clearInterval(regularLightCycle);
        regularLightCycle = null;

        clearInterval(yellowAnimation);
        yellowAnimation = null;
        allRedLights(EWLights);
      });

      socket.on('turnGatesOff', () => {
        turnOffGates();
      });

      socket.on('setAnOffTimer', () => {
        gateLogic();
      });

    });
  });
}
app.listen(3000, () => console.log('Listening on port 3000!'))
