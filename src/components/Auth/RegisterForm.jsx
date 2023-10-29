import { useState } from 'react'

const RegisterForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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
    console.log(state)
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
            <div className='col'>
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
            <div className='col'>
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
