import React, {useState, useRef} from 'react'
import {Form, Col, Button} from "react-bootstrap"

const ChatInput = ({onClick}) => {
    const inputRef = useRef()
    const [message, setMessage] = useState("")

    const handleMessage = (event) =>{
        setMessage(event.target.value)
    }
    const handleClick = async () =>{
        if(message){
            onClick(message)
            inputRef.current.value = ""
        }else{
            return null
        }
        setMessage("")
    }
    return (
        <div>
            <Form className="message-form">
          <Form.Row bg="dark" className="input-container">
            <Col className="chat-input" xs={9}>
              <Form.Control ref={inputRef} onChange={handleMessage} placeholder="Write Your Message..." />
            </Col>
            <Col xs={1}>
                <Button onClick={handleClick} className="">
                <i class="fas fa-paper-plane"></i>
                </Button>
            </Col>
          </Form.Row>
        </Form>
        </div>
    )
}

export default ChatInput
