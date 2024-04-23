import Alunno from '/Alunno';
import {useState,useEffect} from 'react';

function App() {
  useEffect(()=>{
    popolaAlunni();
  },[])

  const [alunni,setAlunni]=useState([]);
  const [pronto,setpronto]=useState(false);

  async function popolaAlunni(){
    const response= await fetch("https://localhost:8080/alunni",{method: "GET"});
    const array = await response.json();

    setAlunni(array);
    setpronto(true);
  }
  
  return (
    <div className="App">
      {
        pronto?
          alunni.map(a=>{
            <Alunno alunno={a} popolaAlunni={popolaAlunni} key={a.id} />
          })
          :
          <div>Loading ...</div>
      }
    </div>
  );
}

export default App;
