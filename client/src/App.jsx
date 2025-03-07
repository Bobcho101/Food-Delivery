import './App.css';
import Header from './components/Header';
import Home from './components/Home';

export default function App() {
 

  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
  <Header />
  <div className="flex-grow">
    <Home />
  </div>
</div>
    </>
  )
}
