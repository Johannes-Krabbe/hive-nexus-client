import { useEffect, useState } from 'react'
import { AuthError } from 'types/types'

import { useUserContext } from "context/userContext";

import { signUp } from 'utils/restClient'

import Router from 'next/router'

import { TextInput } from 'components/index/feed/create-post/text-input/text-input'
import { Button } from 'components/button/button'
import { useToken } from 'lib/hooks';

import styles from './register.module.scss'

export const Register = () => {
  const { user, setUser } = useUserContext();
  const { token, setToken } = useToken();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const [username, setUsername] = useState('')
  const [firstStepDone, setFirstStepDone] = useState(false)

  const handleSubmit = async () => {
    const { userId, createdAt, token } = await signUp(email, password, username);
    setToken(token);
    setUser({userId: userId, createdAt: createdAt, username: username, email: email})
    Router.push('/')
  }

  useEffect(() => {
    if (token) {
      Router.push('/')
      }
  }, []);

  return (
    <div className={styles.Register}>
      <div className={styles.Wrapper}>
        <div className={styles.Container}>
          <div className={styles.FormWrapper}>
            {!firstStepDone ? (
              <form
                id="SignUp"
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
                    setEmail(e.currentTarget.value)
                  }}
                />
                <TextInput
                  id="password"
                  inputType="password"
                  name="password"
                  placeholder="Password"
                  pattern="^(\D+)$"
                  errorMessage={AuthError.Password}
                  title={'password'}
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.currentTarget.value)
                  }}
                />
                <TextInput
                  id="passwordRepeat"
                  inputType="password"
                  name="passwordRepeat"
                  placeholder="Repeat Password"
                  pattern="^(\D+)$"
                  errorMessage={AuthError.Password}
                  title={'passwordRepeat'}
                  value={passwordRepeat}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPasswordRepeat(e.currentTarget.value)
                  }}
                />
              </form>
              ) : (
              <form
                id="SignUp"
                name="Post"
                className={styles.Form}
                onSubmit={handleSubmit}
                method="post"
                >
                <p className={styles.Username}>Claim your unique username</p>
                <TextInput
                  id="username"
                  inputType="text"
                  name="username"
                  placeholder="Username"
                  pattern="^(\D+)$"
                  errorMessage={AuthError.Username}
                  title={'username'}
                  value={username}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.currentTarget.value)
                  }}
                />
              </form>
              )
            }
          </div>
        </div>
      </div>
      <div className={styles.ButtonContainer}>
      {firstStepDone ?
        <Button
          action={'button'}
          variant={'primary'}
          text={'Set Username'}
          onClick={() => {handleSubmit()}}
          />
        :
        <Button
          action={'button'}
          variant={'primary'}
          text={'Sign Up'}
          onClick={() => {setFirstStepDone(true)}}
          />
        }
      </div>
    </div>
  )
}
