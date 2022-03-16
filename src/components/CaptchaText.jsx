import React, { Fragment } from 'react'
import {Container, Button, Card, Form, Row, Col} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';
import MessageAlert from './MessageAlert'

import 'bootstrap/dist/css/bootstrap.min.css'

export default function CaptchaText( {num1, num2} ) {
  
const [ resultado, setResultado ] = useState(0);  
const [ respuestaUser, setRespuestaUser ] = useState(0);

// 1 = pasaste, 2 = error,
const [ error, setError ] = useState(0) 
    
function validaRespuesta (){
  let result = num1 + num2;
  setResultado( result );
   if( result == respuestaUser ) {
     setError( 1 );
     console.log('pasaste el captcha')
   }else {
    setError( 2 );
     console.log('No pasaste ')
   }
}

  return (
      <Fragment>
         <MessageAlert error={error} />
          <Card border="primary" style={{ width: '20rem' }}>
    <Card.Header><h4>Captcha</h4></Card.Header>
    <Card.Body>
      <Card.Title><h5>Resuelve la siguiente operación</h5></Card.Title>
      <Card.Text>
        <Container>
        <Row>
          <Col className="mb-3">
          <h1>{num1} + {num2}</h1>

          </Col>
        
        </Row>
        
        <Row>
          <Col className="mb-3">
                <Form className="mb-3" >
                <input className="mb-3" type="text" placeholder="Escribe tu respuesta" id="respuesta" onChange={(e) => {setRespuestaUser( e.target.value )} } />
                <Row>
                <Button className="mb-3"  variant="primary" onClick={() => validaRespuesta() }>Validar</Button>
                <Button variant="primary">Recargar <Icon.ArrowClockwise /></Button>
                </Row>
                </Form>
          </Col>
        </Row>

        </Container>
      </Card.Text>



    </Card.Body>
  </Card>
      </Fragment>
    


  )
}
