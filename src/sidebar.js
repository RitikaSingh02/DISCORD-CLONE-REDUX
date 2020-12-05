import	{React,useState,useEffect} from 'react'
import "./Sidebar.css"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SignalCellularAltIcon  from "@material-ui/icons/SignalCellularAlt"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import CallIcon from "@material-ui/icons/Call"
import SidebarChannel from "./SidebarChannel.js"
import {Avatar} from "@material-ui/core"
import MicIcon from "@material-ui/icons/Mic"
import HeadsetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"
import {useSelector} from "react-redux"
import {selectUser} from "./features/counter/UserSlice.js"
import db,{ auth } from "./firebase.js"

function Sidebar() 
    {
        const user =useSelector(selectUser)
        const [channels,setChannel]=useState([]);
        useEffect(()=>{
            db.collection('channels').onSnapshot(snapshot=>
                setChannel(
                    snapshot.docs.map(doc=>(
                     {   
                        id:doc.id,
                        channel:doc.data(),
                     }
                    ))
                )
            )
        },[])
        const HandleAddchannel=()=>{
            const channel_name=prompt("Enter new channel name")
            if(channel_name){
                db.collection('channels').add({
                    channelName: channel_name,
                });
            }
        }
        return (
        <div className="sidebar">
                <div className="sidebar__top">
                    <h3>Ritika Singh</h3>
                    <ExpandMoreIcon/>
                </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeaders">
                    <div className="sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>TEXT CHANNELS</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel" onClick={HandleAddchannel}/>
                </div>
            </div>
            <div className="sidebar__channelList">
                {
                    channels.map(({ id,channel})=>
                    (
                        <SidebarChannel key ={id} id={id} channel={channel.channelName}/>
                    )
                    )
                }   
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className="sidebar__voiceIcon" fontSize="large"/>
                <div className="sidebar__voiceinfo">
                    <h3>Voice Connected </h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceicons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar src={user.photo} onClick={()=>auth.signOut()}/>
                <div className="sidebar__profile_info">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,6)}</p>
                </div>
                <div className="sidebar__profile_icons">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>
                </div>
            </div>
            </div>
        )
    }
export default Sidebar