import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../redux/actionCreators/authActionCreator'

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
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
    if (!state.email || !state.password) {
      alert(`please fill the feilds to sigin`)
      return
    }
    const { email, password } = state
    dispatch(signInUser(email, password))
  }
  return (
    <>
      <form autoComplete='off' onSubmit={handleFormSubmit} className='w-100'>
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
          <input
            id='password'
            type='password'
            name='password'
            value={state.password || ''}
            className='form-control '
            placeholder='Password'
            onChange={handleChange}
          />
        </div>
        <div className='mb-3'>
          <button type='submit' className='btn btn-primary w-100'>
            Login
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
