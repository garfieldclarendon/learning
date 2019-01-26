import React from 'react'
import brace from 'brace'
import AceEditor from 'react-ace'
import Button from '../atoms/Button'
import { styledComponent } from '../utils/styledComponent'

import 'brace/mode/java'
import 'brace/theme/monokai'

const StyledDiv = styledComponent('section', {
  '& .ace_editor': {
    border: '1px solid #dacab8',
    width: '400px',
  },
  '& aside': {
    height: '400px',
  },
  '& button': {
    marginTop: '10px',
  },
});

class CodeEditor extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
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
         editorProps={{$blockScrolling: true}}
       />
        {/* <ReactAce
          mode="javascript"
          theme="monokai"
          setReadOnly={false}
          setHighlightActiveLine={false}
          gotoLine={1}
          setUseWrapMode={true}
          setValue={this.props.code}
          onChange={this.onChange}
          style={{ height: '400px', width: '400px' }}
          ref={(instance) => { this.ace = instance; }} // Let's put things into scope
        /> */}
        <Button text="Run Code -->" usage="submit" />
      </StyledDiv>
    );
  }
}

export default CodeEditor;
