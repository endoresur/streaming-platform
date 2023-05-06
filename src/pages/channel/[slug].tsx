export { default } from 'views/channel'
import Routes from 'constants/routes'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 120
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { slug: `${Routes.CHANNEL}/user` } }], fallback: 'blocking' }
}
