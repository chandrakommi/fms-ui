import { LoginForm } from '../../components/Auth'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center '>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mt-5 rounded-3 pt-3 mt-sm-4 mt-md-4 mt-lg-4 mt-xl-4 shadow p-2'>
          <h3 className='display-6 text-center text-info-emphasis '>
            Login here
          </h3>
          <LoginForm />
          <p className='text-end'>
            Not a member yet, <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginPage
