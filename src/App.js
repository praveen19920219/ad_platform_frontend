
import './App.css';
// import MiniDrawer from './dashboard';
// import Sidebar from './sidebar';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import NavBar from './nav_bar';
import Home from './signin';




function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" 
                    element={<Home />} />

                <Route path="/New" 
                    element={<NavBar />} />

            </Routes>
        </Router>
    </>
  );
}

export default App;
