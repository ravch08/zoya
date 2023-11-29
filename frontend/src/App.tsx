import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  BlogsPage,
  ContactUs,
  Footer,
  Header,
  Home,
  Page404,
} from "./components/utils/helper";

import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
