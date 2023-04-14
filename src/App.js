import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="shop">
      <Header />
      <div className="body">
        <Menu />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
