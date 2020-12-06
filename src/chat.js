// import { AddCircle, CardGiftcard, EmojiEmotions } from '@material-ui/icons'
import	React, { useState ,useEffect } from 'react'
import "./chat.css"
import Message from "./Message.js"
import ChatHeader from "./ChatHeader.js"
import  SendRoundedIcon from '@material-ui/icons/SendRounded'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import GifIcon from "@material-ui/icons/Gif"
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import { useSelector } from 'react-redux'
import { selectChannelId, selectChannelName } from './features/counter/AppSlice'
import { selectUser } from './features/counter/UserSlice'
import db from "./firebase"
import firebase from "firebase"

function Chat() 
    {
        const user = useSelector(selectUser);
        const channel_id=useSelector(selectChannelId);
        const channel_name=useSelector(selectChannelName);
        const [messageInput,setInput]=useState("");
        const [messages,setMessages]=useState([]);

        useEffect(() => {
            if(channel_id)
            {
                db.collection('channels').doc(channel_id).collection("message").orderBy(
                    "timestamp","desc"
                ).onSnapshot((snapshot)=>(
                    setMessages(snapshot.docs.map((doc)=>doc.data()))
                ));
            }
          
        }, [])


        const sendMessage=(e)=>{
            e.preventDefault();

            db.collection("channels").doc(channel_id).collection("message").add({
                message:messageInput,
                user:user,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            });
            
            console.log("msg component")
            setInput("")//to again set the message field to null
        }
        console.log(messages)

        return (
            <div className="chat_section">
                {/* <h3>this is the chat sec</h3> */}
            {/* {*Chat*} */}
            <ChatHeader channelName={channel_name}/>
            <div className="chat_messages">
                {
                    messages.map((message)=>(
                        <Message
                        message={message.message}
                        user={message.user}
                        timestamp={message.timestamp}
                        />
                    ))
                }
                {/* <Message message={message} channelName={channel_name} /> */}
                </div>
            <div className="chat_input_message">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input value={messageInput} 
                    disabled={!channel_id}
                    onChange={(e)=>setInput(e.target.value)} 
                    className ="message_input" placeholder={`Input text here ${channel_name}`}/>  
                    {/* <SendRoundedIcon/> */}
                    <button 
                    disabled={!channel_id}
                    onClick={sendMessage}
                    className="chat_input_button" type="submit"><SendRoundedIcon/></button>
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
