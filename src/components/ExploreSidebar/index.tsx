import { useState, useEffect } from 'react'
import { Close } from '@styled-icons/material-outlined/Close'
import { FilterList } from '@styled-icons/material-outlined/FilterList'
import Radio from 'components/Radio'
import Checkbox from 'components/Checkbox'
import Heading from 'components/Heading'
import Button from 'components/Button'
import * as S from './styles'
import { ParsedUrlQueryInput } from 'querystring'
import { removeDuplicateValues } from 'utils/removeDuplicateValues'

type Field = {
  label: string
  name: string
}

type Values = ParsedUrlQueryInput

export type ItemProps = {
  title: string
  name: string
  type: string
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemProps[]
  initialValues?: Values
  onFilter: (values: Values) => void
}

const ExploreSidebar = ({
  items,
  initialValues = {},
  onFilter
}: ExploreSidebarProps) => {
  const [values, setValues] = useState<Values>(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // this method comes from another template
    // that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleFilterMenu = () => {
    setIsOpen(false)
  }

  const handleRadio = (name: string, value: string | boolean) => {
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as string[]) || []
    setValues(prevState => ({
      ...prevState,
      [name]: removeDuplicateValues([...currentList, ...[value]])
    }))
  }

  return (
    <S.Container isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)} />
        <Close aria-label="close filters" onClick={() => setIsOpen(false)} />
      </S.IconWrapper>
      <S.Content>
        {items.map(item => (
          <S.Items key={item.title}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>
            {item.type === 'checkbox' &&
              item.fields.map(field => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={(values[item.name] as string[])?.includes(
                    field.name
                  )}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}

            {item.type === 'radio' &&
              item.fields.map(field => (
                <Radio
                  id={field.name}
                  key={field.name}
                  name={item.name}
                  value={field.name}
                  label={field.label}
                  labelFor={field.name}
                  defaultChecked={
                    String(values[item.name]) === String(field.name)
                  }
                  onCheck={() => handleRadio(item.name, field.name)}
                />
              ))}
            {/* </div> */}
          </S.Items>
        ))}
      </S.Content>
      <S.Footer>
        <Button fullWidth size="medium" onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Container>
  )
}

export default ExploreSidebar
