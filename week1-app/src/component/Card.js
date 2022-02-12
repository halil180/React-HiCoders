import React from 'react'
import image1 from '../assets/image1.png';
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.jpeg"

function Card(props){
    const cardData =[{
        image:image1,
        key:1,
        username:'mr pinguin'
    },
    {
        image:image2,
        key:2,
        username:'flying businessman '
    },
    {
        image:image3,
        key:3,
        username:'Halil '
    },

    ]
    
    return(
        <div className='d-flex justify-content-between m-3  '>
            {cardData.map((user) =>  
                <div className="card m-3 " key={user.key}   >
                <img className="card-img-top" style={{height:'18em'}} src={user.image} alt='example'/>
               <div className="card-body">
               <h5 className="card-title" >{user.username}</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <a href="#/" className="btn btn-primary btn-sm">Go somewhere</a>
               </div>
               </div>
            )}
        </div>
    )
}
export default Card