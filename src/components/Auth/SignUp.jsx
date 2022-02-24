import { useAuthenticator } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'


function SignUp() {
  const auth = useAuthenticator()
  const [cognitoUser, setCognitoUser] = useState({})
  const [formValues, setFormValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmationCode: ''
  })
  useEffect(() => {
    console.log(auth)
  }, [auth])

  const onFormValueChange = async e => {
    const target = e.currentTarget
    setFormValues({ ...formValues, [target.name]: target.value })
    if (target.name === 'confirmationCode' && target.value.length === 6) {
      await onConfirm(target.value)
    }
  }

  const onSubmit = async e => {
    e.preventDefault()
    const res = await Auth.signUp({
      username: formValues.username,
      password: formValues.password,
      attributes: {
        email: formValues.email
      }
    })

    if (res.user && res.codeDeliveryDetails) {
      setCognitoUser(res.user)
    }
  }

  const onConfirm = async code => {
    console.log('confirming')
    const res = await Auth.confirmSignUp(cognitoUser.username, code)
    console.log(res)
  }
  console.log(cognitoUser)
  if (cognitoUser.hasOwnProperty('username')) {
    return (
      <form>
        <label>Confirm SignUp:</label>
        <input
          type='text'
          name='confirmationCode'
          id='confirmationCode'
          onChange={onFormValueChange}
          value={formValues.confirmationCode}
        />
      </form>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <label>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        onChange={onFormValueChange}
        value={formValues.email}
      />

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

      <button type='submit'>SignUp</button>
    </form>
  )
}

export default SignUp
