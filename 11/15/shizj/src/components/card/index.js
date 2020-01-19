import React, { Component } from 'react'
import EButton from '../button'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: props => dispatch({ type: 'add' }),
    reduce: props => dispatch({ type: 'reduce' })
  }
}

class Card extends Component {
  render() {
    return (
      <div className={`
        cr-card
      `}>
        <div className="cr-card-content">{ this.props.count }</div>
        <EButton onClick={ _ => this.props.add() }>add</EButton>
        <EButton onClick={ _ => this.props.reduce() }>reduce</EButton>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)