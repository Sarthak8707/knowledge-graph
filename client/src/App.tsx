import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [text, setText] = useState("");
  const started = useRef(false);
  const finished = useRef(false);
  const toShow = useRef(false);
  const wpm = useRef<number>(0);
  const [_, setDone] = useState(false);
  const textRef = useRef("");

  const startTimer = () => {
    if(started.current) return;
    started.current = true;

    setTimeout(() => {
      finished.current = true;
      toShow.current = true;
      const countWords = (text: string) => {
        return text.trim().split(/\s+/).length;
      };
      wpm.current = countWords(textRef.current)/10;
      setDone(true);

    }, 10000)
  }

  const handleOnChange = (e: any) => {
    if(finished.current) return;
    startTimer();
    setText(e.target.value);
    textRef.current =  e.target.value;

  }
    
    

  return (
    <>
      {/* <input type = "text" value={val} onChange={(e)=>setVal(e.target.value)} ></input> */}
      <div>
        <h1>Start the timer of 60 secs</h1>
        
        <br />
        <textarea onChange = {handleOnChange} ></textarea>
        <br />
        {text}
        <br />
        {toShow.current && wpm.current.toString()}
      </div>
      
    </>
  )
}

export default App
