import Header from "./Components/Header/index"
import './App.css';

function App() {
  return (
    <div className="shop">
      <Header />
      <div className="body">
        <div className="menu"></div>
        <div className="content"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
