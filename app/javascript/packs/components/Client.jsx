import React from 'react'
import PropTypes from 'prop-types'

class Client extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.client.complete,
    }
  }
  render() {
    const { client } = this.props
    return (
      <tr>
        <td>
          {client.name}
        </td>
        <td>
          {client.email}
        </td>
        <td>
          {client.city}
        </td>
        <td>
          {client.company}
        </td>
        <td className="text-right">
          <button className="btn btn-outline-danger"> Delete </button>
        </td>
      </tr>
    )
  }
}

export default Client

Client.propTypes = {
  client: PropTypes.object.isRequired,
}