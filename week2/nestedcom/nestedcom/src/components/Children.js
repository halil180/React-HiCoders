import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//////cocuk profillerinin karti
const Children =({Foreigners})=> {
  return (
    <div className='children-container' >
      {Foreigners.map((user) =>user.children.map((child) => 
      <div key={child.id}>
          <Card style={{ width: '13rem'}} className="children-card" >
      <Card.Img variant="top" src={child.avatar} />
      <Card.Body>
        <Card.Text className='text-start'>
        Firstname:<strong key={user.id}>{child.firstName}</strong>
        </Card.Text>
        <Card.Text className='text-start'>
        Gender:<strong key={user.id}>{child.gender}</strong>
        </Card.Text>
        <Card.Text className='text-start'>
        Birthday:<strong key={user.id}>{child.birthday}</strong>
        </Card.Text  >
      </Card.Body>
      </Card>
      </div>
      ))}
    </div>
  )
}

export default Children