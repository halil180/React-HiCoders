import React from 'react'
import Header from '../Header'
import Children from '../Children'
//cocuklarin bolumu (baslik ve cocuklarin kartlari )
const Childrensection = ({Foreigners,username}) =>{
  return (
      <div className='children'>
        <Header title='CHILDREN' number={Foreigners.filter((user) => user.first_name === username).map((user) => user.children.map((user)=> user.firstName).length)}  Foreigners={Foreigners}/>
        <Children  Foreigners={Foreigners.filter((user) => user.first_name === username)} />
        </div>
  )
}
export default Childrensection