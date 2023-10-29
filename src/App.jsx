import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Auth/LoginPage'
import Homepage from './pages/Home/Homepage'
import { RegisterPage } from './pages'
import HomeHeader from './components/Home/HomeHeader'
const App = () => {
  return (
    <>
      <div className='App'>
        <HomeHeader />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
