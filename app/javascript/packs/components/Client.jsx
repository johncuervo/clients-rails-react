import React from 'react'
import PropTypes from 'prop-types'
import axios from "axios";
// import setAxiosHeaders from "./AxiosHeaders";

class Client extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: this.props.client.complete,
    }
    this.handleDestroy = this.handleDestroy.bind(this);
    this.path = `/api/v1/clients/${this.props.client.id}`;
    console.log(this.props.client.id)
  }
  handleDestroy() {
    // setAxiosHeaders();
    const confirmation = confirm("Are you sure?");
    if (confirmation) {
      axios
        .delete(this.path)
        .then(response => {
          this.props.getClients();
        })
        .catch(error => {
          console.log(error);
        });
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
          <button 
            onClick={this.handleDestroy}
            className="btn btn-outline-danger"
          > 
          Delete 
          </button>
        </td>
      </tr>
    )
  }
}

export default Client

Client.propTypes = {
  client: PropTypes.object.isRequired,
  getClients: PropTypes.func.isRequired
}