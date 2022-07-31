import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from '../Button'
import TextField from '../TextField'
import { FormContainer, FormLink } from '../Form'
import * as S from './styles'

const FormSignIn = () => {

  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  function handleInput(field: string, value: string) {
    setValues(prevState => ({ ...prevState, [field]: value }))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: '/'
    });

    if (response?.url) {
      router.push(response.url);
    }

    console.error('Email ou senha inválidos');
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(value) => handleInput('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button type="submit" size="large" fullWidth>
          Sign in now
        </Button>
        <FormLink>
          Don’t have an account?
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}

export default FormSignIn
