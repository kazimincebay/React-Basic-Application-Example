import { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import Footer from "./Footer";

// const dizim = [
//   { id: 1, title: "Hiper", description: "React" },
//   { id: 2, title: "Süper", description: "React Öğrenmek" },
//   { id: 3, title: "Hiper Süper", description: "Reactın kendisi" },
// ];
class App extends Component {
 

//   }
  render() {
    
    return (
      <div className="App">
        <Counter/>
        <Footer/>
        </div>
       
       
        

      
     
    );
  }
}
/* Arakatman.propTypes = {
   name=PropTypes.number
eğer ki class based bir component değilse proptypes bu şekilde kullanılır
   }*/
export default App;
