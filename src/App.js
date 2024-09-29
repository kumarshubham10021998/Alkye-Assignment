
import CreateAccount from './componets/CreateAccount';
import Footer from './componets/Footer';
import Accounts from './componets/Accounts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/Home';
function App() {
  return (
    <div className="App">
    <Router>
            <Routes>
                <Route path="/" element={<Accounts />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/home" element={<Home />} />
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
