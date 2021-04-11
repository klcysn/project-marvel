import React from 'react'
import {Card} from "react-bootstrap"
import moment from  "moment"

const MessageCard = ({item, variant, i, user}) => {
    const colorNummer = Math.floor(Math.random() * 7)
    return (
        <div>
             <Card
                    bg={variant[colorNummer]}
                    key={i}
                    text={'white'}
                    style={{ width: '40vw', height: "25vh", right: user.email === item.user ? "-50%" : null }}
                    className="mb-2 ml-2"
                >
                    <Card.Header>{item.user}</Card.Header>
                    <Card.Body>
                    <Card.Text>{item.message}</Card.Text>
                    </Card.Body>
                    <Card.Text className="message-date">{moment(item.date).startOf().fromNow()}</Card.Text>
                </Card>
        </div>
    )
}

export default MessageCard
