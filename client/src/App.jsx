import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';

export default function App() {
  return (
    <div className="bg-[#1E1B18] text-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
