import React from 'react'
import _ from 'lodash'
import { List, Avatar, Icon, Comment, Divider, Tag } from 'antd'

import axios from 'axios'
import ReactMarkdown from 'react-markdown'
import store from '../store/index.js'
import { baseAPIUrl } from '../config/config.js'
import './BlogListComponent.css'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
)

export class BlogListComponent extends React.Component {
  constructor() {
    super()
    this.openPaperHtml = this.openPaperHtml.bind(this)
    this.state = {
      nextListUrl: 'init',
      paperList: []
    }
    store.subscribe(() => {
      this.setState(store.getState())
    })
  }

  handleUpdate = (e, { calculations }) => {
    setTimeout(() => {
      if (calculations.bottomVisible) {
        if (
          store.getState().nextPage !== '' &&
          store.getState().nextPage !== null
        ) {
          axios({
            method: 'get',
            url: this.state.nextPage,
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            params: {
              is_recommanded: true
            },
            auth: {
              username: 'django',
              password: 'django'
            }
          })
            .then(function(res) {
              const action = {
                type: 'loadRecommandPaperList',
                value: {
                  paperList: res.data.results,
                  nextPage: res.data.next
                }
              }
              store.dispatch(action)
            })
            .catch(function(error) {
              console.log(error)
            })
        }
      }
    }, 300)
  }

  componentDidMount() {
    if (store.getState().paperList.length > 0) return
    axios({
      method: 'get',
      url: `${baseAPIUrl}/papers/`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      params: {
        is_recommanded: true
      },
      auth: {
        username: 'django',
        password: 'django'
      }
    })
      .then(function(res) {
        const action = {
          type: 'loadRecommandPaperList',
          value: {
            paperList: res.data.results,
            nextPage: res.data.next
          }
        }
        store.dispatch(action)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  paperLike(paper_id, row_id) {
    // console.log(`http://104.45.130.215:8963/papers/${row_id}/paper_like`)
    axios({
      method: 'post',
      url: `${baseAPIUrl}/papers/${row_id}/paper_like/`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      auth: {
        username: 'django',
        password: 'django'
      }
    })
      .then(function(res) {
        const action = {
          type: 'likePaper',
          value: {
            paper_id: paper_id
          }
        }
        store.dispatch(action)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  viewPaper = row => {
    const action = {
      type: 'openPaperItem',
      value: {
        paper_title: row.paper_title,
        file_name: row.paper_id,
        id: row.id,
        paper_id: row.paper_id,
        code_url: row.code_url
      }
    }
    store.dispatch(action)

    axios({
      method: 'get',
      url: `${baseAPIUrl}/papers/${row.id}`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      auth: {
        username: 'django',
        password: 'django'
      }
    }).then(function(res) {
      console.log('For paper view count.')
    })
  }

  openPaperHtml(e) {
    console.log(e)
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={store.getState().paperList}
        footer={
          <div>
            <b>Thank you for reading.</b>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[
              <IconText type="eye" text="156" key="list-vertical-star-o" />,
              <IconText type="heart" text="156" key="list-vertical-like-o" />,
              <IconText type="message" text="2" key="list-vertical-message" />
            ]}
            className="recommand_paper_item"
          >
            <List.Item.Meta
              title={
                <a
                  href={item.href}
                  className="paper-list-title"
                  onClick={this.viewPaper.bind(this, item)}
                >
                  <Tag color="blue">
                    <Icon type="tags" size="small"></Icon>{' '}
                    {item.paper_id.substr(item.paper_id.length - 2, 2)}
                  </Tag>{' '}
                  {item.paper_title}
                </a>
              }
              description={item.page_comments}
            />
            Authors:{' '}
            {item.authors.map((author, index) => {
              return (
                <React.Fragment key={index}>
                  <a>{author}</a>
                  <Divider type="vertical" />
                </React.Fragment>
              )
            })}
            <br />
            <br />
            <div className="paper-list-summary">{item.summary}</div>
            <Comment
              // actions={actions}
              author={<a>Thoth said :-</a>}
              avatar={<Avatar src="/thoth/thoth_head.jpeg" alt="Han Solo" />}
              content={
                <ReactMarkdown
                  // source={' - (1) it generalizes better than networks trained using only the log-likelihood criterion, and\n - (2) it generates longer, more informative and more diverse responses with high utterance and topic relevance even with limited training data'}
                  source={item.recommand_reason}
                />
              }
            />
          </List.Item>
        )}
      />
    )
  }
}
