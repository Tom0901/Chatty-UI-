import React from "react";
import ChatBubble from "./ChatBubble";

export default function ChatContainer() {
  return (
    <div
      className="container shadow-lg p-3 mb-5 mt-5 
       rounded border"
       style = {{height: "80vh"}}
    >
      <ChatBubble />
      
    </div>
  );
}
