import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"
import Results from "./Results"

export default function Dictionary(){
    let [word, setWord] = useState("");
    let [result, setResult] = useState(null);
    
    function handleresponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
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
            <Results result={result} />
        </div>
    )
}