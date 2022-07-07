import axios from "axios";
import React, {useState} from "react";
import "./Dictionary.css"
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props){
    let [word, setWord] = useState(props.defaultKeyword);
    let [result, setResult] = useState(null);
    let [photos, setPhotos] = useState(null);
    let [loaded, setLoaded] = useState(false);
    
    function handleresponse(response){
        console.log(response.data[0]);
        setResult(response.data[0]);
    }

    function handlephotoresponse(response){
        setPhotos(response.data.photos);
    }

    

    function search(event) {

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        axios.get(apiUrl).then(handleresponse);
    
        let photoApiKey = "563492ad6f91700001000001c793b08a33b54ac88f1ebbf38980235a";
        let photoApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
        
        let headers = {Authorization: `Bearer ${photoApiKey}`};
        axios.get(photoApiUrl, { headers: headers} ).then(handlephotoresponse);
    }
    
    function handleWordChange(event) {
        setWord(event.target.value);

    }

    function load() {
    setLoaded(true);
    search();
  }

    if (loaded) {

    return (
        <div className="Dictionary">
            <section className="searchbox">
                <h1>What word do you looking for?!</h1>
                <form onSubmit={search}>
                    <input type="search" onChange={handleWordChange} value="jungle"/>
                </form>
                 <span className="hint">some suggested words : sunset,wine,plants,...</span>
            </section>  
            <Results result={result} />
            <Photos photos={photos} />
            
        </div>
    );
    } else {
        load();
        return "Loading";
    }
    
}