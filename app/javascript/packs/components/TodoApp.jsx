import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";

import Clients from "./Clients";
import Client from "./Client";
import ClientForm from "./ClientForm";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
    this.getClients = this.getClients.bind(this);
    this.createClient = this.createClient.bind(this);
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

  render() {
    return (
      <>
      <ClientForm createClient={this.createClient} />
      <Clients>
        {this.state.clients.map(client => (
          <Client key={client.id} client={client} />
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