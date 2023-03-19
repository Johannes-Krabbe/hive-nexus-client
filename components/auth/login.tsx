import { useState } from 'react'
import Router from 'next/router'
import { AuthError } from 'types/types'

import { TextInput } from 'components/index/feed/create-post/text-input/text-input'
import { Button } from 'components/button/button'

import { signIn } from 'utils/restClient'

import { useUserContext } from "context/userContext";
import { useToken } from 'lib/hooks';

import styles from './login.module.scss'

export const Login = () => {
  const { user, setUser } = useUserContext();

  const { token, setToken } = useToken();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    const { userID, createdAt, username, token } = await signIn(email, password);
    setToken(token);
    setUser({userID: userID, createdAt: createdAt, username: username, email: email})

    Router.push('/')
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
                method="post"
              >
                <TextInput
                  id="email"
                  inputType="text"
                  name="email"
                  placeholder="Email"
                  pattern="^(\D+)$"
                  errorMessage={AuthError.Email}
                  title={'email'}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.currentTarget.value)
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.currentTarget.value)
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
            onClick={() => {handleSubmit()}}
            />
          <p>Not registered yet?</p>
          <Button
            action={'link'}
            href={'sign-up'}
            variant={'primary'}
            text={'Create Account'}
            />
        </div>
      </div>
  )
}
