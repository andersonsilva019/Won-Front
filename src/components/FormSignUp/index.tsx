import Link from 'next/link'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from '../Button'
import TextField from '../TextField'
import { FormContainer, FormLink } from '../Form'

const FormSignUp = () => {
  return (
    <FormContainer>
      <form>
        <TextField
          type="text"
          name="name"
          placeholder="Nome"
          icon={<AccountCircle />}
        />
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
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
        />
        <Button size="large" fullWidth>
          Sign up now
        </Button>
        <FormLink>
          Already have an account?
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}

export default FormSignUp
