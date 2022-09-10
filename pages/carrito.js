import CarPage from '../components/CarPage'

export default function Car({ addresses }) {
  return (
    <main>
      <CarPage addresses={addresses} />
    </main>
  )
}
