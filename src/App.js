import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar'
import ComposeMessageForm from './components/ComposeMessageForm'
import MessageList from './components/MessageList'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {messages: props.messages}
  }

  toggleRead = (ChangedMessage) => {
    let messages = this.state.messages.map(message => {
      if(message === ChangedMessage){
        if (message.read) {
          return {...message, read: false}
        }
        else {
          return {...message, read: true}
        }
      }
      return message
    })

    this.setState({messages})

  }

  toggleCheckBox = () => {
    let messages = this.state.messages.map(message => {
      if(message === true){
        if (message.selected) {
          return {...message, selected: false}
        }
        else {
          return {...message, selected: true}
        }
      }
      return message
    })
    this.setState({messages})
  }


  toggleStar = (ChangedStar) => {
    let messages = this.state.messages.map(message => {
      if(message === ChangedStar){
        if (message.starred) {
          return {...message, starred: false}
        }
        else {
          return {...message, starred: true}
        }
      }
      return message
    })
    this.setState({messages})
  }

  selectedAllMessages = () => {
    let selectedAllMessages = this.state.messages.map(message => {
      message.read = true
      return message
    })
    this.setState({messages: selectedAllMessages})
  }



  render() {
    return (
      <div>
      <Toolbar selectedAllMessages={this.selectedAllMessages} toggleCheckBox = {this.toggleCheckBox}/>
      <ComposeMessageForm />
      <MessageList messages={this.state.messages} toggleRead={this.toggleRead} toggleStar={this.toggleStar}/>
      </div>
    )
  }
}

export default App;
