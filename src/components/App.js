import React, { Component } from 'react';
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props

    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

// state情報をpropsとして扱うことができるようになる(propsに参加するためのチケットのようなイメージ)
const mapStateToProps = state => ({ value: state.count.value })

// action関数をpropsとして扱うことができるようになる
const mapDispatchToProps = ({ increment, decrement })

// stateとactionを結びつける
export default connect(mapStateToProps, mapDispatchToProps)(App)
