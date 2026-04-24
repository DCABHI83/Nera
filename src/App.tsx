import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/sections/Navbar';
import Footer from '@/sections/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import BLogs from './pages/BLogs';
import Home from './pages/Home';
import CallFloat from './components/CallFloat';
import OurWorks from './pages/OurWorks';
import ServicesDedicated from './pages/ServicesDedicated';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-nera-bg">
      <Navbar />
      <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/blogs' element={<BLogs/>}/>
<Route path='/works' element={<OurWorks/>}/>
<Route path='/services' element={<ServicesDedicated/>}/>
      </Routes>
      <Footer />
      <CallFloat/>
      <WhatsAppFloat />
      <Toaster position="top-right" />
    </div>
    
    </BrowserRouter>
  
  );
}

export default App;
