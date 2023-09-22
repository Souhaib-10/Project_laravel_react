import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Students from "../Pages/Students";
import Message from "../Pages/Message";
import AddStudent from "../Pages/AddStudent";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Message />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/students" element={<Students />} />
      <Route path="/students/create" element={<AddStudent />} />
    </Routes>
  );
};
export default Routers;
