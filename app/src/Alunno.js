import {useState} from 'react';

export default function Alunno({alunno,popolaAlunni}){
    const [conferma,setConferma]= useState(false);
    const [cancellazione,setCancellazione]= useState(false);
    const [modifica,setModifica]=useState(false);
    const [ok,setOk]=useState(false);
    const [nome,setNome]=useState("");
    const [cognome,setCognome]=useState("");

    async function cancellaAlunno(){
        setConferma(false);
        setCancellazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        popolaAlunni();
    }

    async function modificaAlunno(){
        setOk(false);
        setModifica(true);
        await fetch(`http://localhost:8080/alunni/`+alunno.id, 
            {  
            method: "PUT",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({nome: nome, cognome: cognome})
            }
        );
        setModifica(false);
        popolaAlunni();
    }

    function rischiesta(){
        setConferma(true);
    }

    function annulla(){
        setConferma(false);
    }

    function rischiestaModifica(){
        setOk(true);
    }

    function annullaOk(){
        setOk(false);
    }

    function gestisciCambioNome(e){
        setNome(e.target.value);
    }

    function gestisciCambioCognome(e){
        setCognome(e.target.value);
    }

    


    return(
        <div>
            {alunno.id} {alunno.nome} {alunno.cognome}
            {
                conferma?
                <span>Sei sicuro?
                    <button onClick={cancellaAlunno}>Si</button>
                    <button onClick={annulla}>No</button>
                </span>
                :
                <button onClick={rischiesta}>Cancella</button>
            }
            {
                cancellazione&&
                
                <span>In fase di cancellazione</span>
            }

            {   ok?
                    <span>
                        <label>Nome:</label><input type="text" onChange={gestisciCambioNome} value={nome}/>
                        <label>Cognome:</label><input type="text" onChange={gestisciCambioCognome} value={cognome}/>
                        <button onClick={modificaAlunno}>salva</button>
                        <button onClick={annullaOk}>Annulla</button>
                    </span>
                :
                <button onClick={rischiestaModifica}>edit</button>
            }
            {
                modifica&&
                <span>In fase di modifica</span>

            }

        </div>
    )

}