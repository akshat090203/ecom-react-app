// import React, { useState } from 'react'
// import { Card, Container } from 'react-bootstrap';

// const Products = () => {
//     const [items, setItems] = useState([
//         {
//             id: 1,
//             product_name: "Official Site",
//             price: 125000,
//             image: "/samsung.png",
//         },
//         {
//             id: 2,
//             product_name: "Online Site",  
//             price: 105000,
//             image: "/amazon.png",   
//         }
//     ]);
//   return (
//     <Container className='rows'>
//         {items.map((elem) => {
//                 return (
//                     <Card key={elem.id} className='col-md-3'>
//                         <Card.Img varient="top" style={{height:"150px",width:"150px"}}
//                          src={process.env.PUBLIC_URL + elem.image} />
//                         <Card.Body>
//                             <Card.Title>{elem.product_name}</Card.Title>
//                             <Card.Text>₹{elem.price}</Card.Text>
//                             <button>Buy Now</button>
//                         </Card.Body>
//                     </Card>
//                 );
//             })
//         }
//     </Container>
//   );
// }
// export default Products;

import React from 'react';
import { useTimer } from 'react-timer-hook';


function MyTimer({ expiryTimestamp }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook </h1>
      <p>Timer Demo</p>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}