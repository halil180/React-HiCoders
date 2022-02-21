import React from 'react'
import Header from '../Header'
import Friends from '../Friends'
const Friendsection = ({Foreigners,username})=> {
  return (
    <div className='friends'> 
    <Header title='FRIENDS' number={Foreigners.filter((user) => user.first_name === username).map((user) => user.friends.map((friend)=> friend.firstName).length)}  Foreigners={Foreigners} />
    <Friends Foreigners={Foreigners.filter((user) => user.first_name === username)}/>
    </div>
  )
}
export default Friendsection