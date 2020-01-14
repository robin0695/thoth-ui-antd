import React from 'react'
import ReactDOM from 'react-dom'
import GGEditor, { Mind, EditableLabel } from 'gg-editor'

import './EditorComponent.css'

const data = {
  label: 'Central Topic',
  children: [
    {
      label: 'Main Topic 1'
    },
    {
      label: 'Main Topic 2'
    },
    {
      label: 'Main Topic 3'
    }
  ]
}
export class EditorComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GGEditor className="editor">
        <Mind className="editorBd" data={data} />
        <EditableLabel />
      </GGEditor>
    )
  }
}
