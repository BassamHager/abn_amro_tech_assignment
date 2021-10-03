import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="app-container">
      {/* navbar */}
      <Navbar />

      {/* home */}
      <HomePage />

      {/* about */}
      <AboutPage />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
