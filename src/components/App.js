import React, {useState} from 'react';
import Idea from './Idea';
import Footer from './Footer';
import Result from './Result';
import Header from './Header';

function App() {
  const [showResultState, setResultState] = useState(true)
  const [textState, setTextState] = useState('');
    const [boolState, setBoolState] = useState('idea');
  
  return (
    <div className="page-container">
      <div className="content-wrap"> 
        <Header />
       { showResultState ? <Idea textState={textState} boolState={boolState} setTextState={setTextState} setBoolState={setBoolState} onToggle={() => setResultState(!showResultState)} /> : <Result onToggle={() => setResultState(!showResultState)} /> } 
      </div>
      <Footer />
    </div>
  );
}

export default App;
