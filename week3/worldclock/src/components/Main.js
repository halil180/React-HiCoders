import React from 'react'
import Headers from './Headers';
import Select from './Select';
const Main = ({setZone,time,region}) =>{
return (
    <div className='content-container'>
        <Headers/>
        <Select setZone={setZone} region={region}/>
    <div className='clock'>{time}</div>
</div>
  )
}

export default Main