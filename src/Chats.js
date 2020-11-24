import React from 'react'
import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div>
            <Chat
            name="Rashmika"
            message="Hey!"
            timestamp="35 minutes ago"
            profilePic="https://static.toiimg.com/photo/msid-77358838/77358838.jpg?158025"

            />
            
        </div>
    )
}

export default Chats
