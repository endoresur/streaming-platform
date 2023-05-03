import Routes from 'constants/routes'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <section>
        <h1>Streamin Service</h1>
        <Link href={Routes.ME}>в личный кабинет</Link>
      </section>
    </>
  )
}
