import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"

export default function Dictionary(){
    let [word, setWord] = useState("");

    function handleresponse(response){
        console.log(response.data[0]);
    }


    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleresponse);
    }
    
    function handleWordChange(event) {
        setWord(event.target.value);

    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleWordChange}/>
            </form>

        </div>
    )
}