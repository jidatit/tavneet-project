import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<LandingPage />}>
            <Route index element={<LandingPage />} />
          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
