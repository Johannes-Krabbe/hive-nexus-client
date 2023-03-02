import { useEffect, useState } from 'react'
import { AuthError } from 'types/types'
import { useRouter } from 'next/router'

import { request } from 'utils/context';
import Router from 'next/router'


import { TextInput } from 'components/index/feed/create-post/text-input/text-input'
import { Button } from 'components/button/button'
import { useToken } from 'lib/hooks';

import styles from './register.module.scss'

export const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const [username, setUsername] = useState('')
  const [firstStepDone, setFirstStepDone] = useState(false)

  async function signUp(email: string, password: string, username: string) {
    console.log(`signing up, username ${username}, password: ${password}, email: ${email}`)
    const res = await request.post(`/auth/sign-up`, { 'email': email, 'password': password, 'username': username });
    return res.data.token
  }

  const router = useRouter()

  // @ts-ignore
  const handleSubmit = async () => {
    const token = await signUp(email, password, username);
    setToken(token);
    Router.push('/')
  }

  const { token, setToken } = useToken();

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
                  errorMessage={AuthError.Password}
                  title={'password'}
                  value={password}
                  // @ts-ignore
                  onChange={(e) => {
                    setPassword(e.target.value)
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
                  // @ts-ignore
                  onChange={(e) => {
                    setPasswordRepeat(e.target.value)
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
                  // @ts-ignore
                  onChange={(e) => {
                    setUsername(e.target.value)
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
          text={'Create Account'}
          onClick={() => {setFirstStepDone(true)}}
          />
        }
      </div>
    </div>
  )
}
