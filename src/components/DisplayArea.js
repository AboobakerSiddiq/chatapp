import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './DisplayArea.css'




function DisplayArea({user2}) {
    const input=useSelector((state)=>state.sid.input)
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    const timestamp = Date.now();
    const time=new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(timestamp)
    
    useEffect(scrollToBottom, [input]);
    return (
        <div className='displayArea'>
        <div >
          {
              input.map((inp)=>{
                  return(
                      <div  className={`${inp.id.includes('2021')?'container':'container darker'}`}>
                      <div>{inp.id.includes('2021')?<img alt="" style={{ width:30 }} src="https://image.flaticon.com/icons/png/512/12/12580.png"/>:<img alt="" style={{ width:30 }} src="https://img.icons8.com/ios/452/circled-r.png"/>}</div>
                      
                      {inp.text}
                      
                      <div className="timestamp">{time}</div>
                      </div>
                      
                  )
              })
          }
         
        </div>
        <div ref={messagesEndRef} />
        </div>
    )
}

export default DisplayArea
