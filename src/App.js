import './App.css';
import NavBar from './components/navBar/navBar'
import itemListConteiner from './components/itemListConteiner/itemListConteiner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <itemListConteiner className="item-list" />
    </div>
  );
}

export default App;
