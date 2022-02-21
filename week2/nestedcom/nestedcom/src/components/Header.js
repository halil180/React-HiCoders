import React from 'react'
/////// butun sectionlarda kullanilan header
const Header = ({number,title,Foreigners})=> {
  return (
    <div key={Foreigners.map((x) => x.id)} className='bg-orange mb-2 display-6 text-white text-start p-1' >{title} {number && <span>({number})</span>}</div>
  )
}
export default Header