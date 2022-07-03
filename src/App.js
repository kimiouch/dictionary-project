import './App.css';
import Dictionary from './Dictionary' ;

function App() {

  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      </header>
      <main>
        <Dictionary defaultKeyword="jungle"/>
      </main>

      <footer className='text-center'>
        Coded by Kimia Haghighi 🦕, and is 
        <a href='https://github.com/kimiouch/dictionary-project'  target="_blank" rel="noreferrer"> open-sourced on Github </a>
        hosted on
        <a href='https://www.netlify.com/' target="_blank" rel="noreferrer"> netlify </a>
      </footer>

     </div>
    </div>
  );
}

export default App;
