import { useState } from 'react'
import { AuthError } from 'types/types'

import { TextInput } from 'components/index/feed/create-post/text-input/text-input'
import { Button } from 'components/button/button'

import { request } from 'utils/context';
import styles from './login.module.scss'

export const Login = ({ setToken }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function signIn(email: string, password: string) {
    const res = await request.post(`/auth/sign-in`, { 'email': email, 'password': password });
    return res.data.token
  }

  // @ts-ignore
  const handleSubmit = async () => {
    const token = await signIn(email, password);
    setToken(token);
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
                  placeholder="Email"
                  pattern="^(\D+)$"
                  errorMessage={AuthError.Email}
                  title={'email'}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
