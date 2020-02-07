import React from 'react'
import { Menu, Icon, Button, Modal, Form, Input, Radio } from 'antd'

const { SubMenu } = Menu

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props
      const { getFieldDecorator } = form
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Title">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please input the title of collection!'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item className="collection-create-form_last-form-item">
              {getFieldDecorator('modifier', {
                initialValue: 'public'
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  }
)

export class RightQuickMenu extends React.Component {
  state = {
    collapsed: true
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        {/* <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button> */}
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          // theme="dark"
          inlineCollapsed={this.state.collapsed}
          inlineIndent="20"
        >
          <Menu.Divider />
          <Menu.Item key="0">
            <Icon type="fullscreen" />
            <span>Max the paper view</span>
          </Menu.Item>
          <Menu.Item key="1">
            <Icon type="heart" />
            <span>Like the paper</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="global" />
            <span>Author's Blog</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="github" />
            <span>Source Code</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="twitter" />
            <span>Twitter</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="facebook" />
            <span>Facebook</span>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="6">
            <Icon
              type="plus-square"
              onClick={() =>
                this.setState({
                  visible: true
                })
              }
            />
            <span>Add new follow</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="deployment-unit" />
                <span>My Followed</span>
              </span>
            }
          >
            <Menu.Item key="5">Qizhe Xie</Menu.Item>
            <Menu.Item key="6">Ari Holtzman</Menu.Item>
            <Menu.Item key="7">Augmentation</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="book" />
                <span>My Library</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="history" />
                <span>Current Viewed</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
          <Menu.Divider />
        </Menu>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
