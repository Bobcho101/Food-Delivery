import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

export default function App() {
 

  return (
    <>
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/*"} element={<NotFound />} />
        </Routes>
      </div>
    </div>
    </>
  )
}
