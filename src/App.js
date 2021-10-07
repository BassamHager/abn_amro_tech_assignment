import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ShowDetailsPage from "./pages/showDetails/ShowDetailsPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

// components
import Navbar from "./components/navbar/Navbar";
import SearchShow from "./components/search/SearchShow";

const App = () => (
  <Router>
    {/* navbar */}
    <Navbar />

    {/* searchbar */}
    <SearchShow />

    <div className="container">
      <Switch>
        {/* home */}
        <Route exact path="/" component={HomePage} />

        {/* about */}
        <Route path="/about" component={AboutPage} />

        {/* show details */}
        <Route path="/showDetails/:id" component={ShowDetailsPage} />

        {/* not found */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>

    {/* footer */}
    <Footer />
  </Router>
);

export default App;
