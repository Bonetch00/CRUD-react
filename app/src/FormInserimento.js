import { useState } from "react";

export default function FormInserimento({popolaAlunni}){
    const [nome,setNome]=useState("");
    const [cognome,setCognome]=useState("");


    async function salvaAlunno(){
        await fetch(`http://localhost:8080/alunni`, 
            {  
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({nome: nome, cognome: cognome})
            }
        );
        popolaAlunni();
    }

    function gestisciCambioNome(e){
        setNome(e.target.value);
    }

    function gestisciCambioCognome(e){
        setCognome(e.target.value);
    }

    return(
        <>
            <h1>Inserire Alunno</h1>
            <div>Nome: <input type="text" onChange={gestisciCambioNome}/></div>
            <div>Cognome: <input type="text" onChange={gestisciCambioCognome}/></div>
            <div><button onClick={salvaAlunno}>Inserisci</button></div>
            {nome}<br/>{cognome}<br/>
        </>
    )
}