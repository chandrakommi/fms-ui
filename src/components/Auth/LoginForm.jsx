import { useState } from 'react'
import { auth } from '../../API/firebase'

const LoginForm = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

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
    auth.signInWithEmailAndPassword(email, password).then(
      user => console.log('succes', email, password),
      error => console.log(error)
    )
  }
  return (
    <>
      <form autoComplete='off' onSubmit={handleFormSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
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
          <label htmlFor='password' className='form-label'>
            Password
          </label>
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
