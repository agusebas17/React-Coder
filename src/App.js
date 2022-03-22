import './App.css';
import NavBar from './components/navBar/navBar'
import itemListConteiner from './components/itemListConteiner/itemListConteiner';

function App() {

  return (
    <div className="App">
      <NavBar />
      <h1> Productos disponibles</h1>
      <itemListConteiner className="item-list" />
    </div>
  );
}

export default App;
