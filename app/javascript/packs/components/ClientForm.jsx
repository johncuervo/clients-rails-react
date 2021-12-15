import React from 'react'
import PropTypes from 'prop-types'

import axios from 'axios'
class ClientForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.name = React.createRef()
    this.email = React.createRef()
    this.city = React.createRef()
    this.company = React.createRef()
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/v1/clients', {
        client: {
          name: this.name.current.value,
          email: this.email.current.value,
          city: this.city.current.value,
          company: this.company.current.value,
          complete: false,
        },
      })
      .then(response => {
        const client = response.data
        this.props.createClient(client)
        this.props.clearErrors(); 
      })
      .catch(error => {
        this.props.handleErrors(error);
      })
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="my-3">
        <div className="form-row row">
          <div className="form-group col-md-4 m-2">
            <input
              type="text"
              name="name"
              ref={this.name}
              // required
              className="form-control"
              id="name"
              placeholder="Write your name..."
            />
          </div>
          <div className="form-group col-md-4 m-2">
            <input
              type="text"
              name="email"
              ref={this.email}
              // required
              className="form-control"
              id="email"
              placeholder="Write your Email..."
            />
          </div>
          <div className="form-group col-md-4 m-2">
            <input
              type="text"
              name="city"
              ref={this.city}
              // required
              className="form-control"
              id="city"
              placeholder="Write your City..."
            />
          </div>
          <div className="form-group col-md-4 m-2">
            <input
              type="text"
              name="company"
              ref={this.company}
              // required
              className="form-control"
              id="company"
              placeholder="Write your Company..."
            />
          </div>
          <div className="form-group col-md-4  m-2">
            <button className="btn btn-outline-success btn-block">
              Add Client
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default ClientForm

ClientForm.propTypes = {
  createClient: PropTypes.func.isRequired,
  handleErrors: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired
}