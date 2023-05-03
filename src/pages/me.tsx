export { default } from 'views/me'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
