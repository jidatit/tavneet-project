import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ScrollToHashElement from './components/Navigation'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />}>
            <Route index element={<LandingPage />} />
          </Route>

        </Routes>
        <ScrollToHashElement/>
      </Router>
    </>
  )
}

export default App
