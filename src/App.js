import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import ExploreBillboards from "./pages/ExploreBillboards";
import Detail from "./pages/Detail";
import BookNow from "../src/pages/BookNow";
import ServiceDetail from "./pages/ServiceDetail";
import HoverCards from "./pages/HoverCards"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/explore" element={<ExploreBillboards />} />
          <Route path="/detail" element={<Detail />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/faqs" element={<FAQs />} />
          <Route exact path="/book-now" element={<BookNow />} />
          {/* Dynamic route for Service Detail */}
          <Route path="/" element={<HoverCards />} />
          <Route path="/service-detail" element={<ServiceDetail />} />{" "}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
