import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerfication";
import Documentation from "./pages/Documentation";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyEmail" element={<OtpVerification />} />
        {/* <Route path="/documentation" element={<Documentation />} /> */}
      </Routes>
   
    </BrowserRouter>
  );
}

export default App;

