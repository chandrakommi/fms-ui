import { LoginForm } from '../../components/Auth'

const LoginPage = () => {
  return (
    <>
      <div className='container-fluid d-flex justify-content-center '>
        <div className='card col-sm-12 col-lg-4 p-3'>
          <LoginForm />
        </div>
      </div>
    </>
  )
}

export default LoginPage
