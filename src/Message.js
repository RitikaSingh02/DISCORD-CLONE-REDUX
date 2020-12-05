import { Avatar } from '@material-ui/core'
import	React from 'react'
import "./message.css"
function Message() 
    {
        return (
            <div className="message_section">
                <Avatar/>
                <div className="message_info">
                    <h4>RitikaSingh02
                        <span className="message_timestamp">this is the time stamp</span>
                    </h4>
                    <p>this is the message</p>
                    </div>
             </div>)
    }
export default Message