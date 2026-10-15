import { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! How can I help you today?"
    }
  ]);

  const [input, setInput] = useState("");

 const getReply = (message: string) => {
  const text = message.toLowerCase();

  if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
  ) {
    return "Hi! Welcome to DroneTV. How can I help you?";
  }

  if (text.includes("service")) {
    return "We provide drone-related services for different business and professional needs.";
  }

  if (
    text.includes("course") ||
    text.includes("training") ||
    text.includes("learn")
  ) {
    return "We offer drone pilot training, drone technology courses and advanced training programs.";
  }

  if (
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("fee")
  ) {
    return "The course or service price may vary. Please submit an enquiry and our team will provide you with the details.";
  }

  if (
    text.includes("contact") ||
    text.includes("someone") ||
    text.includes("talk")
  ) {
    return "You can submit your details through the enquiry form and our team will contact you.";
  }

  if (
    text.includes("register") ||
    text.includes("registration") ||
    text.includes("join")
  ) {
    return "You can register your interest by filling out the enquiry form below.";
  }

  if (text.includes("student")) {
    return "Yes, students can enquire about our drone courses and training programs.";
  }

  if (
    text.includes("drone") ||
    text.includes("pilot")
  ) {
    return "DroneTV provides drone-related services, training and support. You can ask me about our courses or services.";
  }

  if (
    text.includes("thank") ||
    text.includes("thanks")
  ) {
    return "You're welcome! Let me know if you need anything else.";
  }

  if (
    text.includes("help") ||
    text.includes("support")
  ) {
    return "Sure! I can help you with services, courses, training, registration, pricing and contacting our team.";
  }

  return "Sorry, I don't understand that. You can ask me about our services, courses, training, registration, pricing or contact details.";
};

  const sendMessage = () => {
    if (input.trim() === "") {
      return;
    }

    const reply = getReply(input);

    setMessages([
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: reply }
    ]);

    setInput("");
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Hi! How can I help you today?"
      }
    ]);
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h2>DroneTV Support</h2>
        <button onClick={clearChat}>Clear</button>
      </div>

      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={message.sender}>
            {message.text}
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;