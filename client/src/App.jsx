import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavBar from "./components/Common/AppNavBar";
import { Toaster } from 'react-hot-toast'
import ReadPage from "./pages/ReadPage";
import CreatePage from './pages/CreatePage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <>
      <Router>
        <Toaster />
        <AppNavBar />
        <Routes>
          <Route path='/' element={<ReadPage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/update/:id' element={<UpdatePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
