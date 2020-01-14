import React from 'react'
import { Button } from 'antd'
import './RightQuickTool.css'

const tools = [
  { id: 1, type: 'max', icon: 'column-width' },
  { id: 2, type: 'like', icon: 'heart' },
  { id: 3, type: 'datasource', icon: 'database' },
  { id: 4, type: 'web', icon: 'global' },
  { id: 5, type: 'git', icon: 'github' },
  { id: 6, type: 'facebook', icon: 'facebook' },
  { id: 6, type: 'twitter', icon: 'twitter' },
  { id: 7, type: 'bookmark', icon: 'star' }
]
export class RightQuickTool extends React.Component {
  handleClick = e => {
    console.log(e)
  }

  render() {
    return (
      <div className="right-quick-tool-bar">
        {tools.map((item, index) => {
          return (
            <div>
              <Button
                type="default"
                shape="circle"
                disabled={false}
                icon={item.icon}
                size="small"
              ></Button>
              <br />
            </div>
          )
        })}
      </div>
    )
  }
}
