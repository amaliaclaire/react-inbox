import React from 'react'

import Message from './Message'

export default function messageList({messages}) {
  let elements = messages.map(message => <Message message={message}/>)
  return (
    <div>
      {elements}
    </div>
  )
}
