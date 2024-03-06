import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainTemplate from "./page/MainTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainTemplate/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
