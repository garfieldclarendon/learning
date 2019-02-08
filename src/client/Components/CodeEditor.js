import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import Button from '../atoms/Button'
import ReactModal from 'react-modal'
import { styledComponent } from '../utils/styledComponent'

import 'brace/mode/java'
import 'brace/theme/monokai'

const StyledDiv = styledComponent('section', {
  '& .ace_editor': {
    border: '1px solid #dacab8',
    //width: '400px',
  },
  '& aside': {
    //height: '400px',
  },
  '& button': {
    marginTop: '10px',
  },
});

class CodeEditor extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.state = {
      modalOpen: false,
    }
  }

  handleCloseModal() {
    console.log('close');
    this.setState({ modalOpen: false });
  }

  handleCodeExecution() {
    console.log("Execution");

    this.setState({ modalOpen: true });
  }

  onChange(newValue, e) {
    console.log(newValue, e);
    if (this.ace) {
      const editor = this.ace.editor; // The editor object is from Ace's API
      console.log(editor.getValue()); // Outputs the value of the editor
    }
  }

  render() {
    return (
      <StyledDiv>
        <ReactModal
           isOpen={this.state.modalOpen}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal.bind(this)}>Close Modal</button>
        </ReactModal>
        <div id="ace-editor-div" />
        <AceEditor
         mode="javascript"
         theme="monokai"
         setReadOnly={false}
         setHighlightActiveLine={false}
         gotoLine={1}
         onChange={this.onChange}
         setUseWrapMode={true}
         name="ace-editor-div"
         defaultValue={this.props.code}
         height={this.props.height}
         width={this.props.width}
         wrapEnabled={true}
         editorProps={{$blockScrolling: true}}
       />
        <div onClick={this.handleCodeExecution.bind(this)}>
          <Button text="Run Code -->" usage="submit" />
        </div>
      </StyledDiv>
    );
  }
}

export default CodeEditor;
