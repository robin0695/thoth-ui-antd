import React from 'react'
import { Menu, Avatar, Icon, Divider, Input } from 'antd'
import './TopMenuComponent.css'

export class TopMenuComponent extends React.Component {
  handleClick = e => {
    console.log(e)
  }

  render() {
    return (
      <Menu onClick={this.handleClick} mode="horizontal">
        <Avatar className="topmenu-logo" src="./thoth/thoth-logo.jpeg"></Avatar>
        <span className="topmenu-title">Thoth's box</span>

        <Divider type="vertical"></Divider>
        <Input
          className="topmenu-search-box"
          prefix={
            <Icon type="file-search" style={{ color: 'rgba(0,0,0,.25)' }} />
          }
          placeholder="Search in thoth's box "
          onChange={value => console.log(value)}
          style={{ width: '50vw' }}
        />
        <Divider className="top-menu-item" type="vertical"></Divider>
        <Menu.Item className="top-menu-item" key="aboutUs">
          About Us
        </Menu.Item>
        <Menu.Item className="top-menu-item" key="myBox">
          My Box
        </Menu.Item>
        <Menu.Item className="top-menu-item" key="alipay">
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
        </Menu.Item>
      </Menu>
    )
  }
}
