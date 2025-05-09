import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { useState } from 'react';
// import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not 
  const [alert,setAlert] = useState(null);
  

  const showAlert = (message, type)=>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout (()=>{
          setAlert(null);
         }, 1500);
  }

  const toggleMode =() =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable","success");
  }
}


  return (
    <>
<Navbar title="TextUtil" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
<About/>
</div>
    </>
  );
}

export default App;
