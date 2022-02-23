import React,{useEffect, useState} from 'react'
import "./style.css"
//// saat komponenti setinterval ile her saniye yenileniyor state ile saatin guncel halini tutuyoruz
function Time() {
    const [timeState,setTimeState] = useState()
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setTimeState(date.toLocaleTimeString())
        }, 1000);
    },[])
    return (
    <div className='clock'>{timeState}</div>
)
}
export default Time