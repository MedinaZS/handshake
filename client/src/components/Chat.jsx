import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import io from "socket.io-client"

const Chat = () => {

    const [socket] = useState(io(":8000"));
    const [message, setMessage] = useState();

    useEffect(() => {
        // we need to setup all of our event listeners
        // in the useEffect function
        console.log("Use Effect is running?");
        socket.on("welcome_message", data => { console.log(data); setMessage(data) });
    }, [])

    return (
        <div>{message && <p>{message}</p>}</div>
    )
}

export default Chat