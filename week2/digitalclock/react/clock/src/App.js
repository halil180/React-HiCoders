import Time from './Time'
import Nav from "./Nav"
import Header from './Header'
import "./style.css"
function App() {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Time/>
    </div>
  );
}

export default App;