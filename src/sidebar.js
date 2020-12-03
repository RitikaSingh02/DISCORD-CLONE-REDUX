import	React from 'react'
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

function Sidebar() 
    {
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
                    <AddIcon className="sidebar__addChannel"/>
                </div>
            </div>
            <div className="sidebar__channelList">
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
                <SidebarChannel/>
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
                <Avatar/>
                <div className="sidebar__profile_info">
                    <h3>RitikaSingh02</h3>
                    <p>#your id</p>
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