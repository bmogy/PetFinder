import './App.css';
import React,{Component} from "react"
import PetfinderBanner from "./Petfinder/header/header"

class App extends Component {
  render(){
  return (
    <div className="App">
      <PetfinderBanner></PetfinderBanner>
    </div>
  );
  }
}

export default App;
