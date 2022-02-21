import Foreigners from './data/foreigners.json'
import Personsection from "./components/sections/Personsection"
import Childrensection from './components/sections/Childrensection';
import Friendsection from './components/sections/Friendsection';
//// program 3 bolumden olusuyor, personsection(kullanici), Childrensection(cocuklari),Friendsection(arkadaslari)
////Foreigners props i json dosyasindan geliyor
const App = ({username}) =>{
  return (
    <div className="App" >
      <Personsection Foreigners={Foreigners} username={username} />
      <Childrensection Foreigners={Foreigners} username={username}/>
      <Friendsection Foreigners={Foreigners} username={username}/>
    </div>
  );
}
export default App;
