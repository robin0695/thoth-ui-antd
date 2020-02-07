import React, { createRef } from 'react'
import { Row, Col, Affix } from 'antd'
import { TopMenuComponent } from './TopMenuComponent.jsx'
import { BlogListComponent } from './BlogListComponent.jsx'
// import { EditorComponent } from './EditorComponent.jsx'
import { MyBoxComponent } from './MyBoxComponent.jsx'
import { BlogPaperContentComponent } from './BlogPaperContentComponent.jsx'
import store from '../store/index.js'
import './BoneComponent.css'
import { RightQuickTool } from './RightQuickTool.jsx'
import { RightQuickMenu } from './RightQuickMenu.jsx'

export class BoneComponent extends React.Component {
  constructor() {
    super()
    store.subscribe(() => {
      console.log(this.contextRef)
      this.setState(store.getState())
    })
  }

  contextRef = createRef()

  render() {
    return (
      <React.Fragment>
        <Affix>
          <Row>
            <Col span={24}>
              <TopMenuComponent />
            </Col>
          </Row>
        </Affix>
        <Row>
          <Col span={1}></Col>
          <Col span={7}>
            <BlogListComponent />
            {/* <MyBoxComponent /> */}
          </Col>
          <Col
            span={13}
            className="blog-content-main"
            style={{ left: '33.333333vw' }}
          >
            <BlogPaperContentComponent />
          </Col>
          <Col style={{ position: 'fixed', top: '95px', left: '87.5vw' }}>
            <RightQuickMenu />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
