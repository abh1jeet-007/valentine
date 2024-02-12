import React, { useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import './valentine.css';
import ConfettiExplosion from 'react-confetti-explosion';

const AcceptProposal = () => {
 
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            setToggle((toggle) => !toggle);
      
        }, 3000);
     
        return () => clearInterval(intervalID);
     
    }, []);
  return (
    <div className='accept'>

      <ConfettiExplosion 
        force= {1.0}
        duration= {5000}
        particleCount={500}
        particleSize={5}
        effectInterval={3000}
      />
      <Card>
        <Card.Body >
            <Card.Img height="200px" width="200px" src="https://media.tenor.com/zVkwGs4fXR0AAAAM/akshay-welcome.gif"  /> 
        </Card.Body>
      </Card>
    </div>
  )
  
}

export default AcceptProposal
