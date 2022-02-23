import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//////arkadaslarin profillerinin karti
const Friends = ({Foreigners}) => {
  return (
    <div className='friends-container' >
        {Foreigners.map((x) =>x.friends.map((friend) => 
      <div>
          <Card style={{ width: '15rem'}} className="children-card" >
      <Card.Img variant="top" key={x.id} src={friend.avatar}/>
      <Card.Body>
        <Card.Text className='text-start'>
        Firstname:<strong key={x.id}>{friend.firstName}</strong>
        </Card.Text>
        <Card.Text className='text-start'>
        Gender:<strong key={x.id}>{friend.gender}</strong>
        </Card.Text>
        <Card.Text className='text-start'>
        Birthday:<strong key={x.id}>{friend.birthday}</strong>
        </Card.Text  >
        <Card.Text className='text-start'>
        Phone:<strong key={x.id}>{friend.phone}</strong>
        </Card.Text  >
      </Card.Body>
      </Card> 
      </div>
      ))}
    </div>
  )
}
export default Friends