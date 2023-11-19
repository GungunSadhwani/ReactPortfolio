// import logo from './logo.svg';
import './App.css';
import Myheader from './components/header.js';
import { HeroSection } from './components/herosection.js';
// import A from './components/footer.js';
import ContactForm from './components/contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Myheader />
      <HeroSection />
      <ContactForm />
      
    </div>
  );
}

export default App;
