import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      anchorEl: null
    }
  }

  render() {
    return (
      <header />
    )
  }
}

Header.propTypes = {
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
