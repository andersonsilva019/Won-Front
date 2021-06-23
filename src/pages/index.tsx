import { GetStaticProps } from 'next'
import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}
  }
}
