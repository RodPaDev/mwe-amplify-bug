import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import useAmplifyAuth from '@src/hooks/useAmplifyAuth'

function SignIn(props) {
  const { user, isLoading } = useAmplifyAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [formValues, setFormValues] = useState({
    password: '',
    username: ''
  })

  useEffect(() => {
    let from = location.state?.from?.pathname || '/'
    if (!isLoading && user) {
      navigate(from, { replace: true })
    }
  }, [user, isLoading])

  const onFormValueChange = async e => {
    const target = e.currentTarget
    setFormValues({ ...formValues, [target.name]: target.value })
  }

  const onSubmit = async e => {
    e.preventDefault()
    await Auth.signIn({
      username: formValues.username,
      password: formValues.password
    })
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <label>username</label>
      <input
        type='text'
        name='username'
        id='username'
        onChange={onFormValueChange}
        value={formValues.username}
      />

      <label>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        onChange={onFormValueChange}
        value={formValues.password}
      />

      <button type='submit'>SignIn</button>
    </form>
  )
}

export default SignIn
