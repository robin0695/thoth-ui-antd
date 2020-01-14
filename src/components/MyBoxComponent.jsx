import React from 'react'
import { Tree, Icon, Button } from 'antd'
import paperContentStore from '../store/index.js'
import './MyBoxComponent.css'

const { TreeNode } = Tree

export class MyBoxComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = paperContentStore.getState()
    this.handleTabChange = this.handleTabChange.bind(this)
    paperContentStore.subscribe(() =>
      this.setState(paperContentStore.getState())
    )
  }

  handleTabChange(e, data) {
    this.setState({ activeIndex: data.activeIndex })
  }

  state = {
    showLine: true,
    showIcon: false
  }

  onShowLineChange = showLine => {
    this.setState({ showLine })
  }

  onShowIconChange = showIcon => {
    this.setState({ showIcon })
  }

  render() {
    const { showIcon, showLine } = this.state
    return (
      <Tree
        className="mybox-tree"
        showLine={true}
        showIcon={showIcon}
        defaultExpandedKeys={['0-0-0', '0-0-1', '0-0-2']}
      >
        <TreeNode icon={<Icon type="carry-out" />} title="My Box" key="0-0">
          <TreeNode
            icon={<Icon type="carry-out" />}
            title="My Library"
            key="0-0-0"
          >
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="HellaSwag: Can a Machine Really"
              key="0-0-0-0"
            />
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="Multi-Task Deep Neural Networks"
              key="0-0-0-1"
            />
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="Unsupervised Data Augmentation"
              key="0-0-0-2"
            />
          </TreeNode>
          <TreeNode
            icon={<Icon type="carry-out" />}
            title="My Followed"
            key="0-0-1"
          >
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="Probing Neural Network Compre..."
              key="0-0-1-0"
            />
          </TreeNode>
          <TreeNode
            icon={<Icon type="carry-out" />}
            title="My Project"
            key="0-0-2"
          >
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="XLNet: Generalized Autoregres..."
              key="0-0-2-0"
            />
            <TreeNode
              switcherIcon={<Icon type="form" />}
              icon={<Icon type="carry-out" />}
              title="Measuring Bias in Contextual..."
              key="0-0-2-1"
            />
          </TreeNode>
          <TreeNode
            icon={<Icon type="carry-out" />}
            title="Current Viewed"
            key="0-0-2"
          >
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="XLNet: Generalized Autoregres..."
              key="0-0-2-0"
            />
            <TreeNode
              switcherIcon={<Icon type="form" />}
              icon={<Icon type="carry-out" />}
              title="Measuring Bias in Contextual..."
              key="0-0-2-1"
            />
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="HellaSwag: Can a Machine Really"
              key="0-0-0-0"
            />
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="Multi-Task Deep Neural Networks"
              key="0-0-0-1"
            />
            <TreeNode
              icon={<Icon type="carry-out" />}
              title="Unsupervised Data Augmentation"
              key="0-0-0-2"
            />
          </TreeNode>
        </TreeNode>
      </Tree>
    )
  }
}
