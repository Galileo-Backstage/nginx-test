import logo from './logo.svg';
import './App.css';

function App() {

  const getError = async (code) => {
    if(code === 500 ) {
      try {
        await fetch('/api/errors/5xx')
      } catch (e) {
        console.log(e)
      }
    }

    if (code === 404) {
      try {
        await fetch('/api/errors/4xx')
      } catch (e) {
        console.log(e)
      }
    }
  }
  return (
    <div style={{ height: '400px', width: '400px', margin: '200px', 'background': 'aliceblue', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <button onClick={() => getError(404)}>4xx</button>
      <button onClick={() => getError(500)}>5XX</button>
    </div>
  );
}

export default App;
