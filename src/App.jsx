import { Route, Routes } from 'react-router-dom'
import HomeHeader from './components/Home/HomeHeader'
import { LoginPage, RegisterPage } from './pages/Auth'
import { Homepage } from './pages/Home'
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
