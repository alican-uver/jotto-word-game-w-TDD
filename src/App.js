import logo from './logo.svg';
import './App.css';
import Congrats from './Congrats'



function App() {

  const props ={
    success:true
  }
  return (
    <div className="App">
      <Congrats data={props}/>
    </div>
  );
}

export default App;
