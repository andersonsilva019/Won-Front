import Heading from 'components/Heading'
import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => {
  return (
    <S.Container>
      {!!title && (
        <Heading lineLeft lineColor="secondary">
          {title}
        </Heading>
      )}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </S.Container>
  )
}

export default TextContent
