import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [feedbackMessages, setFeedbackMessages] = useState([]);

  const handleDescription = (text) => {
    let response = '';

    if (text.toLowerCase() === 'github') {
      response =
        'GitHub, Inc. is a platform and cloud-based service for software development and version control, allowing developers to store and manage their code.';
    } else if (text.toLowerCase() === 'linkedin') {
      response =
        'LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps. It was launched on May 5, 2003.';
    } else {
      response = "I'm sorry, I don't have information on that.";
    }

    setMessages([
      ...messages,
      { text: `User: ${text}`, user: true },
      { text: `Bot: ${response}`, user: false },
    ]);
  };

  const handleFeedback = (response) => {
    if (response === 'yes') {
      const updatedFeedbackMessages = [
        ...feedbackMessages,
        { text: `User: Feedback - Thank you for your feedback!`, user: true },
        { text: `Bot: Thank you for your feedback!`, user: false },
      ];
      setFeedbackMessages(updatedFeedbackMessages);
    } else if (response === 'no') {
      const updatedFeedbackMessages = [
        ...feedbackMessages,
        { text: `User: Feedback - I would like a better solution.`, user: true },
        { text: `Bot: I will check and give you a better solution.`, user: false },
      ];
      setFeedbackMessages(updatedFeedbackMessages);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="button-widget">
        <button onClick={() => handleDescription('github')}>GitHub</button>
        <button onClick={() => handleDescription('linkedin')}>LinkedIn</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={message.user ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="feedback-container">
        {feedbackMessages.map((message, index) => (
          <div
            key={index}
            className={message.user ? 'user-message' : 'bot-message'}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="feedback-options">
        <label>
          <input
            type="radio"
            name="feedback"
            value="yes"
            onChange={() => handleFeedback('yes')}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="feedback"
            value="no"
            onChange={() => handleFeedback('no')}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default Chatbot;
