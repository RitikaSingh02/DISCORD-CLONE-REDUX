import	React from 'react'
import"./SidebarChannel.css"
import {setChannelInfo} from "./features/counter/AppSlice"
import {useDispatch} from "react-redux"

function SidebarChannel({id,channel}) 
    {
        const dispatch=useDispatch()
        console.log(id,channel);

        return (
            <div className="sidebarChannel" onClick={()=>
                dispatch(setChannelInfo({
                  channelId:id,
                  channelName:channel,  
                }))
                // console.log(id)
            }>
                <h4>
                    <span className="sidebarChannel__hash">#</span>{channel}
                </h4>
            {/* {*SidebarChannel*} */}
             </div>)
    }
export default SidebarChannel