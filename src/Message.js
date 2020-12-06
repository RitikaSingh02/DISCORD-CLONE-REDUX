import { Avatar } from '@material-ui/core'
import	React from 'react'
import "./message.css"
function Message({ message , user ,timestamp }) 
    {
        console.log(user)
        return (
            <div className="message_section">
                <Avatar src ={user.photo}/>
                <div className="message_info">
                    <h4>{ user.DisplayName }
                    <span className="message_timestamp">{timestamp}</span>
                    </h4>
                    <p>{message}</p>
                    </div>
             </div>)
    }
export default Message