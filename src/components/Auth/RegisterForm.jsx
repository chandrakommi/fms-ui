import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../redux/actionCreators/authActionCreator'

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const dispatch = useDispatch()

  const handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    setState(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    const { name, email, password, confirmPassword } = state
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill all the fields')
      return
    }
    if (password !== confirmPassword) {
      alert('Confirm password does not match with password')
      return
    }
    dispatch(signUpUser(email, name, password))
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <input
            id='name'
            type='text'
            name='name'
            value={state.name || ''}
            className='form-control '
            placeholder='Name'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <input
            id='email'
            type='email'
            name='email'
            value={state.email || ''}
            className='form-control '
            placeholder='someone@email.com'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
              <input
                id='password'
                type='password'
                name='password'
                value={state.password || ''}
                className='form-control '
                placeholder='Create password'
                onChange={handleChange}
              />
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mt-3 mt-sm-0 mt-md-0 mt-lg-0 mt-xl-0 mt-xxl-0'>
              <input
                id='confirm-password'
                type='password'
                name='confirmPassword'
                value={state.confirmPassword || ''}
                className='form-control '
                placeholder='Confirm password'
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary w-100'>
            Register
          </button>
        </div>
      </form>
    </>
  )
}

export default RegisterForm
