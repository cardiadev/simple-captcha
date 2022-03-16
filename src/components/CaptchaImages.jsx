import React, { Fragment } from 'react'
import {Container, Button, Card, Badge, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import MessageAlert from './MessageAlert'


export default function CaptchaImages( { pictures, correcto }) {

  // 1 = pasaste, 2 = error,
  const [ error, setError ] = useState(0);
  //const [msg, setMsg] = useState('')
  const correctoCheck = (name) => {

    if(name == correcto.name){
      setError( 1 );
      //setMsg('pasaste el captcha')
      console.log('pasaste el captcha')
      setTimeout( () => {window.location.reload(); },  2000)
    }else{
      setError( 2 );
      //setMsg('te equivocaste')
      console.log('te equivocaste')
      setTimeout( () => {window.location.reload(); },  2000)
      
    }

  }

  return (
    <>
    <MessageAlert error={error} />
    <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header><h4>Captcha</h4></Card.Header>
    <Card.Body>
      <Card.Title><h5>Selecciona al <Badge bg="secondary">{correcto.name}</Badge></h5></Card.Title>
      <Card.Text>

        <Container>
        <Row>
         
          { 
            pictures.map( (p) => (
              <Col className="mb-3">
              <img style={{height:'64px',width:'64px'}} 
                   src={p.url} 
                   onClick={ ()=> correctoCheck(p.name) }/>
              </Col>

            ) )
          
          }

        </Row>
        <Row>
        <Button variant="primary" onClick={()=>window.location.reload()}>Recargar <Icon.ArrowClockwise /></Button>
        </Row>
        </Container>
      </Card.Text>

    </Card.Body>
  </Card>
    </>
  
  
  )
}
