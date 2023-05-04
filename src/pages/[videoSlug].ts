export { default } from 'views/video'
import Routes from 'constants/routes'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 120
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { videoSlug: `${Routes.VIDEO}=qwer` } }], fallback: 'blocking' }
}
