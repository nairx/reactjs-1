import Footer from "./components/Footer";
import Header from "./components/Header";
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";
import App7 from "./components/App7";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App1 />} />
        <Route path="app2" element={<App2 />} />
        <Route path="app3" element={<App3 />} />
        <Route path="app4" element={<App4 />} />
        <Route path="app5" element={<App5 flag={2} />} />
        <Route path="app6" element={<App6 />} />
        <Route path="app7" element={<App7 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
