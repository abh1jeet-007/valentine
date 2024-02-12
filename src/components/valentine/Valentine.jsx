import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import {rejectedText, imageList} from './list'
import './valentine.css'

const Valentine = () => {


  const [title, setTitle] = useState(0);
  let count  = 2;
  const navigate = useNavigate();


  const handleNoClick = () => {
        return setTitle(title + 1);
  }

  const handleYesClick =() => {
    navigate("/success");
  }

  let buttonSize = (title + 1)*5;
  let noButtonSize = 40;

  if(buttonSize < 15) {
    buttonSize = 15;
    noButtonSize = 40 -title
  }
  else {
    noButtonSize = 40 - title;
  }

  if(buttonSize >70) {
    buttonSize = 70 + count;
    count +=2 ;
  }

  if(title === rejectedText.length - 1) {
    buttonSize = 100;
    noButtonSize = 0
  }


  return (
    <div className='container'>
        <Card className="item">
        <Card.Body style={{padding: "0px !important"}}>
            <Card.Title>{ rejectedText[title]}</Card.Title>
            <Card className='img'>
                <Card.Img height="200px" width="25px" src={imageList[title]} /> 
            </Card>
            <Button className ="yes" style ={{width: `${buttonSize}%`}} onClick ={handleYesClick} variant="success">{noButtonSize === 0 ? "Okay, Fine....." :'Yes'}</Button>
            {noButtonSize !== 0 && <Button className='noButton' style ={{width: `${noButtonSize}%`}} disabled={rejectedText.length <= title+1} onClick ={handleNoClick} variant="danger">No, Definitely Not</Button>}
        </Card.Body>
        </Card>
    </div>
  )
}

export default Valentine
