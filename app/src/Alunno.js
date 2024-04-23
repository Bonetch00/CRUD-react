import {useState} from 'react';

export default function Alunno(alunno,popoAlunni){
    const [conferma,setConferma]= useState(false);
    const [cancellazione,setCancellazione]= useState(false);

    async function cancellaAlunno(){
        setConferma(false);
        setCancellazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunni.id}`, {method: "DELETE"});
        popoAlunni();
    }

    function rischiesta(){
        setConferma(true);
    }

    function annulla(){
        setConferma(false);
    }


    return(
        <div>
            {alunno.nome} {alunno.cognome}
            {
                conferma?
                <span>Sei sicuro?
                    <button onClick={cancellaAlunno}>Si</button>
                    <button onClick={annulla}>No</button>
                </span>
                :
                <button onClick={rischiesta}>Cacella</button>
            }
            {
                cancellazione&&
                
                <span>In fase di cancellazione</span>
            }


        </div>
    )

}