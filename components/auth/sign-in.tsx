import { useState } from 'react'
import { AuthError } from 'types/types'

import { TextInput } from 'components/index/feed/create-post/text-input/text-input'
import Button from 'components/button/button'
import styles from './sign-in.module.scss'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault()
    // setShowSuccessMessage(true)

    // console.log('showSuccessMessage:')
    // console.log(showSuccessMessage)
    console.log('Sign In, submitting:')
    console.log(`email: ${email}`)
    console.log(`password: ${password}`)
  }

  return (
    <div className={styles.SignUp}>
      <div className={styles.Wrapper}>
        <div className={styles.Container}>
          <div className={styles.FormWrapper}>
            <form
              id="SignIn"
              name="Post"
              className={styles.Form}
              onSubmit={handleSubmit}
              method="post"
            >
              <TextInput
                id="email"
                inputType="text"
                name="email"
                placeholder="Email or Username"
                pattern="^(\D+)$"
                errorMessage={AuthError.Email}
                title={'email'}
                value={email}
                // @ts-ignore
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <TextInput
                id="password"
                inputType="password"
                name="password"
                placeholder="Password"
                pattern="^(\D+)$"
                errorMessage={AuthError.Email}
                title={'password'}
                value={password}
                // @ts-ignore
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <div className={styles.ButtonContainer}>
        <Button
          action={'button'}
          variant={'secondary'}
          text={'Sign In'}
          onClick={() => {console.log(`Logging In`)}}
          />
        <p>Not registered yet?</p>
        <Button
          action={'link'}
          href={'sign-up'}
          variant={'primary'}
          text={'Create Account'}
          onClick={() => {console.log(`Creating Account`)}}
          />
      </div>
    </div>
  )
}
