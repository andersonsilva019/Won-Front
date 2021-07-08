import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import Button from '../Button'
import TextField from '../TextField'
import { FormContainer, FormLink } from '../Form'
import * as S from './styles'

const FormSignIn = () => {
  return (
    <FormContainer>
      <form>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>
        <Button size="large" fullWidth>
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
