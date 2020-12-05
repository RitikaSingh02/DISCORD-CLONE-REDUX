import	React from 'react'
import  "./ChatHeader.css"
import  PeopleAltRoundedIcon  from '@material-ui/icons/PeopleAltRounded'
import  NotificationIcon  from '@material-ui/icons/Notifications'
import  EditLocationRoundedIcon  from '@material-ui/icons/EditLocationRounded'
import  SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import  SendRoundedIcon from '@material-ui/icons/SendRounded'
import  HelpRoundedIcon from '@material-ui/icons/HelpRounded'

function ChatHeader() 
    {
        return (
            <div className="chat__header">
                {/* <p>this is the header</p> */}
                <div className="chat_header__left">
                        <h3>    
                            <span className="chat_header__hash">#</span>
                            channel_name
                        </h3>
                    </div>
                <div className="chat_header__right">
                    {/* <h3> right__chat_header</h3> */}
                    <NotificationIcon/>
                    <EditLocationRoundedIcon/>
                    <PeopleAltRoundedIcon/>
                    <div className="chat_header_search">
                        <input placeholder="Search"/>
                        <SearchRoundedIcon/>
                        </div>
                    <SendRoundedIcon/>
                    <HelpRoundedIcon/>
                    </div>
                
            </div>
            )
    }
export default ChatHeader