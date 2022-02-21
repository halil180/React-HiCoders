import React from 'react'
import Header from '../Header'
import Person from '../Person'
const Personsection = ({Foreigners,username}) => {
return (
    <div className='person'>
    <Header title='PERSON' Foreigners={Foreigners}/>
    <Person Foreigners={Foreigners.filter((user) => user.first_name === username)}/>
    </div>
)
}
export default Personsection