import Header from "components/Header";
import Nav from "components/Nav";
import Routes from "Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <section>
        <Nav />
        <Routes />
      </section>
    </div>
  );
}

export default App;
