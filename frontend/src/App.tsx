
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { Dashboard } from "./pages/Dashboard";
import { SharedBrain } from "./pages/SharedBrain";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/share/:shareLink" element={<SharedBrain />} />

    </Routes>
  </BrowserRouter>
}

export default App 
