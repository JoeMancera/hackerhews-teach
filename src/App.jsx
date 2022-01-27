import Header from "components/Header";
import Pepito from "components/Nav";
import Routes from "Routes";

function App() {
  return (
    <div className="app">
      <Header />
      <section>
        <Pepito />
        <Routes />
      </section>
    </div>
  );
}

export default App;
