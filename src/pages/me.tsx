import Routes from 'constants/routes'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <section>
        <h1>Личный кабинет</h1>
        <Link href={Routes.INDEX}>на главную</Link>
      </section>
    </>
  )
}
