import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
const App = () => {
  return (
    <div className="App">
      {/* we need to use BrowserRouter in order for us to use react router */}
      <BrowserRouter>
      {/* Navbar */}
        <Navigator />
        <Routes>
          {/* the Route component is perhaps the most important component in React Router
          Its responsibility is to render some component when its path matches the current URL. */}
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;