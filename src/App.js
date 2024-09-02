import Layout from './Layout';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import PortfolioDetails from './components/PortfolioDetails';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/portfolio/:id' element={<PortfolioDetails />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App;
