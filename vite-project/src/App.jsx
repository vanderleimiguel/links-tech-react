import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Summary } from './components/Summary/Summary'
// import { Webcrawler } from './components/Webcrawler/Webcrawler'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Summary />
      <Footer />
      {/* <Webcrawler /> */}
    </div>
  )
}

export default App
