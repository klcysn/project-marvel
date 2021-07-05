import React, { useEffect, useState } from 'react'
import "./ChatPage.scss"
import axios from "axios"
import {useSelector} from "react-redux"
import MessageCard from "../../Components/MessageCard/MessageCard"
import ChatInput from "../../Components/ChatInput/ChatInput"



const ChatPage = () => {

    const user = useSelector(state => state.userId)
    const [allMessages, setAllMessages] = useState([])
    const [force, setForce] = useState(0)
    const variant = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark']

    

    useEffect(()=>{
        axios.get(process.env.REACT_APP_REAL_TIME_DATA_BASE_CHAT).then(({data})=>{
            setAllMessages(data)
            console.log(data)
        })
    },[force])

    const handleSubmit = async (message) =>{
        if(message){
            await axios.put(process.env.REACT_APP_REAL_TIME_DATA_BASE_CHAT, [{user: user.email, message, date: Date.now()}, ...allMessages])
            setForce(force + 1)
        }else{
            return null
        }
    }
    
    return (
      <div id="chat-container" className="chat-container">
        <div className="chat-screen">
        {allMessages?.map((item, i)=> <MessageCard item={item} i={i} variant={variant} user={user} />)}
        </div>
        <ChatInput onClick={handleSubmit} />
        <a href="#chat-container" className="up-arrow"><i class="fas fa-chevron-up"></i></a>
      </div>
    );
}

export default ChatPage
