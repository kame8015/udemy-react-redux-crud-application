import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvent } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    );
  }
}

// action関数をpropsとして扱うことができるようになる
// const mapDispatchToProps = ({ postEvent })

// stateとactionを結びつける
export default connect(null, null)(EventsNew)
