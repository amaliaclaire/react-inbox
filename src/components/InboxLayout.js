import React from 'react'

export default function InboxLayout (props) {
  return (
    <div className="InboxLayout">
      {props.children[0]}
      {props.children[1]}
      {props.children[2]}
    </div>
  )
}
