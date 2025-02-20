import './App.css'
import Header from './components/Header/Header'
import Saweria from './components/Saweria/Saweria'
import Tiktok from './components/Tiktok/Tiktok'
import Promotion from './components/Promotion/Promotion'


function App() {
  
  return (
    <div className='app'>
      <div className="green-background">
        <Header/>
      </div>
      <Tiktok/>
      <Saweria/>
      <Promotion/>
        <div className="footer">
        © 2025
        </div>
    </div>
  )
}

export default App
