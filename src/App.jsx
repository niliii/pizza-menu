// import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Pizza from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import "./index.css";

function App() {
  // const [advice, setadvice] = useState("")
  // const [count,setcount]=useState(0)
  // async function getAdvice() {
  // const res =  await fetch('https://api.adviceslip.com/advice');
  // const data = await res.json();
  // setadvice(data.slip.advice);
  // setcount((c) => c +1);
    
  // }

  // useEffect(function(){
  //   getAdvice();
  // },[]);

  return (
    <>
   {/* <h1>{advice}</h1>
   <button onClick={getAdvice}>getAdvice</button>
   <Message count={count}/> */}
   <Pizza name="pizza spnachi"ingredient="material such as tomato, potato,chess and..." fotoName="../assets/spinaci.jpg" price="10"/>
  
   <Header/>
   
    </>
  )
}
// function Message(props){
// return(
//   // eslint-disable-next-line react/prop-types
//   <p>hiii<strong>{props.count}</strong></p>

// )
// }
export default App
