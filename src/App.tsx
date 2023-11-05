import './App.css';
import { useState } from 'react';


function App() {
  let [rgbText, setText] = useState('');

  let [backColor,setColor] = useState('')
  const handler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const{value,validity} = e.target;

    if(validity.valid){
      const r:number = parseInt(value.slice(1, 3), 16);
      const g:number = parseInt(value.slice(3, 5), 16);
      const b:number = parseInt(value.slice(5, 7), 16);
      setText(`rgb (${r}, ${g}, ${b})`)
      setColor('right')    
    }else{
      setColor('wrong') 
    }
    if(value.length < 7) {
      setColor('') 
      setText('')
    }
  }

  return (
    <div className={`container ${backColor}`}>
      <div className='form_wrapper'>
        <form className='form'>
           <input className='input_hex' type="text" pattern= "#[A-Fa-f0-9]{6}\b" onChange={handler}/>
        </form>
      </div>
      <div className='rgb_text'>
        {rgbText}
      </div>
    </div>

      
  );
}

export default App;
