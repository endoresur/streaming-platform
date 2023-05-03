export { default } from 'views/index'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  }
}
