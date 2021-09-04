import * as S from './styles'

import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Button from 'components/Button'

const FormProfile = () => {
  return (
    <S.Container>
      <Heading lineBottom color="black" size="small">
        My profile
      </Heading>
      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="John Doe"
        />
        <TextField
          name="email"
          placeholder="E-mail"
          label="E-mail"
          type="email"
          initialValue="johndoe@gmail.com"
          disabled
        />
        <TextField
          name="password"
          placeholder="Type your password"
          label="Password"
          type="password"
        />
        <TextField
          name="new_password"
          placeholder="New password"
          label="New Password"
          type="password"
        />
        <Button size="large">Save</Button>
      </S.Form>
    </S.Container>
  )
}

export default FormProfile
