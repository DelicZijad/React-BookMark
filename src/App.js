import './App.scss';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Extension from './components/Extension/Extension';
import FAQ from './components/FAQ/FAQ';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="main">
      <Nav />
      <Header />
      <Features />
      <Extension />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
