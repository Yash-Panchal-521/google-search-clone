import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouteOption from './components/RouteOption'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <RouteOption />
      <Footer />
    </div>
  );
}

export default App;
