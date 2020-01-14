import React from 'react'
import { Tabs } from 'antd'
import Iframe from 'react-iframe'
import paperContentStore from '../store/index.js'
import './BlogPaperContentComponent.css'

const { TabPane } = Tabs

export class BlogPaperContentComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = paperContentStore.getState()
    this.handleTabChange = this.handleTabChange.bind(this)
    paperContentStore.subscribe(() =>
      this.setState(paperContentStore.getState())
    )
  }

  handleNormalClick(e, element) {
    const action = {
      type: 'switchOpenPaper',
      value: element
    }
    paperContentStore.dispatch(action)
    console.log(element)
  }

  handleClick(e, file_name) {
    e.preventDefault()
    if (e.nativeEvent.which === 1) {
    } else if (e.nativeEvent.which === 3) {
      const action = {
        type: 'closePaperItem',
        value: {
          file_name: file_name
        }
      }
      paperContentStore.dispatch(action)
    }
  }

  handleTabChange(e, data) {
    this.setState({ activeIndex: data.activeIndex })
  }

  render() {
    return (
      <Tabs className="paper_tabs">
        {this.state.openPaperList.map((element, index) => {
          console.log(index)
          let htmlFileName = element.file_name.split('/')[
            element.file_name.split('/').length - 1
          ]
          return (
            <TabPane
              className="paper_content_pane"
              tab={element.paper_title}
              key={index + 1}
            >
              <Iframe
                url={`https://thoth-box.com/paper_html/${htmlFileName}.html`}
                width="100%"
                height="100%"
                id="myId"
                allow="fullscreen"
                className="blog-paper-content-iframe"
                display="initial"
                position="relative"
                overflow="hidden"
                loading="auto"
              />
            </TabPane>
          )
        })}
      </Tabs>
    )
  }
}
