import { ChangeEvent, useState, InputHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInput?: (value: string) => void
  label?: string
  labelFor?: string
  initialValue?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  iconPosition = 'left',
  icon,
  disabled = false,
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Container disabled={disabled}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          id={labelFor}
          type="text"
          onChange={onChange}
          iconPosition={iconPosition}
          disabled={disabled}
          value={value}
          {...props}
        />
      </S.InputWrapper>
    </S.Container>
  )
}

export default TextField
