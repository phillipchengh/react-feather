import { PostMeta, PostNotes, PrePost } from './_includes.jsx'
import React from 'react'


export default class ChatPost extends React.Component {
  render() { return (
    <div className="r_post_audio">
      <div className="conversation post">

        {!!this.props.Title &&
          <b>{this.props.Title}</b>
        }

        <ul>
        {Object.keys(this.props.Lines).map(function (l, i) {
          var line = this.props.Lines[l];
          return (
            <li className="member{line.UserNumber}" key={i}>

              {!!line.Label && <span className="label">{line.Label}</span> }
              {line.Line}
            </li>
          );
        }.bind(this))}
        </ul>

        <PostMeta {... this.props}/>
      </div>

      <PostNotes PostNotes={this.props.PostNotes} />

    </div>
  )}
}
