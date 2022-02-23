import React from 'react'
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
///////kullanici kart yapisi
const  Person =({Foreigners}) => {
  return (
    <div className='Person-container' >
    <Card style={{ width: '18rem'}} className="person-card" >
      <Card.Img variant="top" src={Foreigners.map((person) => person.avatar)}/>
      <Card.Body>
        <Card.Text className='text-start'>
        Firstname:{Foreigners.map((person) =><strong key={person.id}>{person.first_name} </strong>)}
        </Card.Text>
        <Card.Text className='text-start'>
        Lastname:{Foreigners.map((person) =><strong key={person.id}>{person.last_name} </strong>)}
        </Card.Text>
        <Card.Text className='text-start'>
        Address:{Foreigners.map((person) => <strong key={person.id}>{person.address} </strong>)}
        </Card.Text  >
        <Card.Text className='text-start'>
        Email :{Foreigners.map((person) => <strong key={person.id}>{person.email} </strong>)}
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  )
}
export default Person