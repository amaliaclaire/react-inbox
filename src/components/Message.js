import React from 'react'

function renderLabels(labels) {
  return labels.map(label => {
    return(
      <span className="label label-warning">
        {label}
      </span>
    );
  })
}


export default function Messages ({message}) {
  return (
    <div>
      <div class="row message read">
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
            {message.read ? <input checked type="checkbox" /> : <input type='checkbox'/>}

            </div>
            <div class="col-xs-2">
            <i className={message.starred === true ? 'star fa fa-star' : 'star fa fa-star-0'}/>
            </div>
          </div>
        </div>
        <div class="col-xs-11">
          {renderLabels(message.labels)}
          <a href="#">
             {message.subject}
          </a>
        </div>
      </div>
    </div>
  )
}
