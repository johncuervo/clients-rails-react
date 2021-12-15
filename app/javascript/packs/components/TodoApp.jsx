import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

import Clients from "./Clients";
import Client from "./Client";
import ClientForm from "./ClientForm";
import ErrorMessage from "./ErrorMessage";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
      errorMessage: null
    };
    this.getClients = this.getClients.bind(this);
    this.createClient = this.createClient.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }
  componentDidMount() {
    this.getClients();
  }
  getClients() {
    axios
      .get("/api/v1/clients")
      .then(response => {
        const clients = response.data;
        this.setState({ clients });
      })
      .catch(error => {
        console.log(error);
      });
  }

  createClient(client) {
    const clients = [client, ...this.state.clients];
    this.setState({ clients });
  }

  handleErrors(errorMessage) {
    this.setState({ errorMessage });
  }
  clearErrors() {
    this.setState({
      errorMessage: null
    });
  }

  render() {
    return (
      <>
      {this.state.errorMessage && (
          <ErrorMessage errorMessage={this.state.errorMessage} />
      )}
      <ClientForm 
        createClient={this.createClient} 
        handleErrors={this.handleErrors}
        clearErrors={this.clearErrors}
      />
      <Clients>
        {this.state.clients.map(client => (
          <Client 
            key={client.id} 
            client={client} 
            getClients={this.getClients}
          />
        ))}
      </Clients>
      </>
    );
  }
}

document.addEventListener('turbolinks:load', () => {
  const app = document.getElementById('todo-app')
  app && ReactDOM.render(<TodoApp />, app)
})