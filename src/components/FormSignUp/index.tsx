import Link from 'next/link'
import { useRouter } from 'next/router'
import { Email, Lock, AccountCircle } from '@styled-icons/material-outlined'
import Button from '../Button'
import TextField from '../TextField'
import { FormContainer, FormLink } from '../Form'
import { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'

const FormSignUp = () => {

  const router = useRouter();

  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    email: '',
    password: '',
    username: '',
  });

  const [createUser] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues(prevState => ({ ...prevState, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password,
        }
      }
    })
    router.push('/sign-in')
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="username"
          placeholder="Username"
          icon={<AccountCircle />}
          onInputChange={(value) => handleInput('username', value)}
        />
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
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('confirm_password', value)}
        />
        <Button size="large" fullWidth type="submit">
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
