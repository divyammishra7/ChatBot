import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';

import { useState } from 'react';
import ChatBot from 'react-simple-chatbot'
import steps from './steps'

import Hero from './Hero';
 


function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      <Hero/>
<ChatBot   headerTitle="SciAstra Bot"
//aa
steps={steps}
   className='bot' floating={true}/>
  {/* {showBot &&  <Chatbot   className='chat' config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        ></Chatbot>
  }
        <button className='bott' onClick={() => toggleBot((prev) => !prev)}>Bot</button> */}
    </div>
  );
}

export default App;
