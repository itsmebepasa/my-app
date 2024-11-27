import'./App.css';

import Body from'./components/Body.js';
import Footer from'./components/Footer.js';
import Header from'./components/Header.js';
function App() {
  let name="nikey";
  return (
    <div className="App">
      {/* <h2>Namaste</h2>
        <p>{name ==='nikey'?'hello bepasa':'hello bepasa'}</p>
           */}
          <Header/>
          <Body/>
          <Footer/>  
            </div>
  );
}

export default App;
