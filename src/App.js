import React, { useState } from 'react';
import ChatInput from './ChatInput';
import MessageList from './MessageList';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSendMessage = (message) => {
        setMessages([...messages, message]);
    };

    return (
        <div>
            <h1>Real-time Chat</h1>
            <MessageList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    );
}

export default App;
