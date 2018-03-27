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


export default function Messages ({selected, message, toggleRead, toggleStar}) {
  // console.log(message);
  return (
    <div>
      <div className={message.read === true ? 'row message read selected' : 'row message unread'} >
        <div class="col-xs-1">
          <div class="row">
            <div class="col-xs-2">
            {message.read ? <input checked type="checkbox" /> : <input type='checkbox'/>}

            </div>
            <div class="col-xs-2">
            <i onClick={() => toggleStar(message)} className={message.starred === true ? 'star fa fa-star' : 'star fa fa-star-o'}/>
            </div>
          </div>
        </div>
        <div class="col-xs-11" onClick={() => toggleRead(message)}>
          {renderLabels(message.labels)}
          <a href="#">
             {message.subject}
          </a>
        </div>
      </div>
    </div>
  )
}
