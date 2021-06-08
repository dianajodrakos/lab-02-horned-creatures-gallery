import './App.css';
import Header from './Header.js';
import ImageList from "./ImageList.js";
import data from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageList list={data}/>
    </div>
  );
}

export default App;


//narwhal rhino unicorn unilego triceratops markhor mouflon addax chameleon lizard dragon