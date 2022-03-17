import './App.css';
import { useState, useEffect } from 'react';
import CaptchaText from './components/CaptchaText'
import CaptchaImages from './components/CaptchaImages'

function App() {

  const [ captcha, setCaptcha] = useState(0);
  const [ pictures, setPictures ] = useState([]);
  const [ correcto, setCorrecto ] = useState({});
   
  const [ num1, setNum1 ] = useState(0);
  const [ num2, setNum2 ] = useState(0);

  // 0 = imagenes
  // 1 = operaciones


  useEffect(() => {
    setCaptcha(Math.round(Math.random()*1))
    setNum1(Math.round(Math.random()*15));
    setNum2(Math.round(Math.random()*15));
    
    if(captcha == 1 ){
      //setNum1(Math.round(Math.random()*15));
      //setNum2(Math.round(Math.random()*15));
    }else{
      fetch('https://simple-captcha-backend.herokuapp.com/api/picture/generarRandom')
      .then( res => res.json() )
      .then( json => { console.log(json); 
                      setPictures( json.result );
                      setCorrecto( json.correcto );
                    } )
      .catch( err => console.log( err ))
    }
  }, []);


  return (
    <div className="App">
      <header className="App-header">
       { captcha == 1 ? ( <CaptchaText num1={num1} num2={num2} />) : (<CaptchaImages pictures={pictures} correcto={correcto}/>) }
      </header>
    </div>
  );
}

export default App;
