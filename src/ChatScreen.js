import React, {useState} from 'react';
import './ChatScreen.css';
import Avatar from "@material-ui/core/Avatar";
function ChatScreen() {

 const [input, setInput] = useState('');   
const [messages, setMessages] = useState([
    {
        name: 'Rashmika',
        image: 'https://static.toiimg.com/photo/msid-77358838/77358838.jpg?158025',
        message: 'Hey! '
    },
    {
        name: 'Rashmika',
        image: 'https://static.toiimg.com/photo/msid-77358838/77358838.jpg?158025',
        message: 'how is it going..'
    },

    {
        message: 'Hey! Rashmika. I am a big Fan!'
    },
]);


const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, { message : input}]);
    setInput("");
};

    return (
        <div className="chatScreen">

            <p className="chatScreen_timestamp">You Matched with Rashmika on 22/11/2020</p>

            


            {messages.map(message => (

                message.name ? (
                <div className="chatScreen_message">
                    <Avatar className="chatScreen_image" alt={message.name} src={message.image} />
                    <p className="chatScreen_text">{message.message}</p>
                </div>
                ) : (
                    <div className="chatScreen_message">
                    <p className="chatScreen_textUser">{message.message}</p>
                    </div>

                )

            ))

            }

           

                <form className="chatScreen_Input">

                    <input 

                    value={input}
                    onChange={(e) => setInput(e.target.value) }
                    type="text" placeholder="Type a message..." className="chatScreen_InputField" />
                    <button onClick={handleSend} className="chatScreen_Send" type="submit">SEND</button>



                </form>



            





        </div>
    )
}

export default ChatScreen
