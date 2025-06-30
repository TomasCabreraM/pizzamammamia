import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import { Registro } from './components/Registro';
import { Login } from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Registro /> */}
      <Login/>
      <Footer />
    </>
  );
}

export default App;
