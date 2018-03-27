import React from 'react'

import Message from './Message'

export default function messageList({messages, toggleRead, toggleStar}) {
  let elements = messages.map(message => <Message message={message} toggleRead={toggleRead} toggleStar={toggleStar}/>)
  return (
    <div>
      {elements}
    </div>
  )
}
