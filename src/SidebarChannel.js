import	React from 'react'
import"./SidebarChannel.css"
import {setChannelId} from "./features/counter/AppSlice"

function SidebarChannel({id,channel}) 
    {
        return (
            <div className="sidebarChannel" onClick={setChannelId}>
                <h4>
                    <span className="sidebarChannel__hash">#</span>{channel}
                </h4>
            {/* {*SidebarChannel*} */}
             </div>)
    }
export default SidebarChannel