import React from 'react'
import {Container, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function MessageAlert({error}) {
  return (
    <Container>
      { error == 2 && (<Alert variant="danger" >
                        <Alert.Heading>Te equivocaste</Alert.Heading>
                            <p className="mb-0">Intentalo nuevamente</p>
                        </Alert>
                        ) }
      { error == 1 && (<Alert variant="success" >
                        <Alert.Heading>Felicidades</Alert.Heading>
                            <p className="mb-0">Haz resuelto el Captcha satisfactoriamente</p>
                        </Alert>
                        ) }
    
    </Container>

  )
}
