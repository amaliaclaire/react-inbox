import React from 'react';

export default function ToolBar ({messages, selectedMessageCount, toggleMessages, allSelected}) {
// console.log('messages', messages);
  return (
    <div class="row toolbar">
      <div class="col-md-12">
        <p class="pull-right">
          <span class="badge badge">2</span>
          unread messages
        </p>

        <button onClick={() => toggleMessages()} class="btn btn-default">
        <i className={ allSelected ? "fa fa-check-square-o" : "fa fa-square-o"  } />
        </button>

        <button class="btn btn-default">
          Mark As Read
        </button>

        <button class="btn btn-default">
          Mark As Unread
        </button>

        <select class="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select class="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button class="btn btn-default">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}
