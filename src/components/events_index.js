import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  // componentが呼ばれたときに呼ばれる
  componentDidMount() {
    // 外部のAPIサーバーにeventを実行する
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {this.renderEvents()}
        </tbody>
      </table>
    );
  }
}

// state情報をpropsとして扱うことができるようになる(propsに参加するためのチケットのようなイメージ)
const mapStateToProps = state => ({ events: state.events })

// action関数をpropsとして扱うことができるようになる
const mapDispatchToProps = ({ readEvents })

// stateとactionを結びつける
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
