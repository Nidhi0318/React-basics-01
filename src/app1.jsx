import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <h2>Welcome!</h2>
        <p>This is the main content.</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;