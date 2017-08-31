import { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    id:state.id,
    text:state.text
  }
}

let DisplayStore = (item) => {
  return (
    <div>
      <h2>Item selected:</h2>
      <div>
        {item.text}
      </div>
    </div>
  )
}

DisplayStore = connect(
  mapStateToProps
)(DisplayStore)

export default DisplayStore