// import { AddCircle, CardGiftcard, EmojiEmotions } from '@material-ui/icons'
import	React from 'react'
import "./chat.css"
import Message from "./Message.js"
import ChatHeader from "./ChatHeader.js"
import  SendRoundedIcon from '@material-ui/icons/SendRounded'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import GifIcon from "@material-ui/icons/Gif"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"

function Chat() 
    {
        return (
            <div className="chat_section">
                {/* <h3>this is the chat sec</h3> */}
            {/* {*Chat*} */}
            <ChatHeader/>
            <div className="chat_messages">
                <Message/>
                </div>
            <div className="chat_input_message">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input className ="message_input" placeholder="Test channel"/>  
                    {/* <SendRoundedIcon/> */}
                    <button className="chat_input_button" type="submit"><SendRoundedIcon/></button>
                </form>
                <div className="chat_input_icons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                    </div>
                </div>
             </div>)
    }
export default Chat
