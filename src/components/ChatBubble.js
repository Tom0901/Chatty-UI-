import React from "react";
import avatar from '../img/avatar.jpg'

export default function ChatBubble(props) {
  //const { text, name } = props;
  return (
    <div className="card mb-2" style={{ width: "95%", margin: "auto", background:"#d1e5fe"   }}>
      <div className="card-body">
        <img src={avatar} className= "rounded-circle img-thumbnail" width="50px"></img> 
        <p className="card-text d-inline-block ml-4">Hello world</p>
      </div>
    </div>
  );
}
