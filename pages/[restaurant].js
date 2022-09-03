import Plates from '../components/Plates'
import RestaurantPage from '../components/RestaurantPage'

export default function Restaurant() {
  return (
    <main style={{ overflow: 'hidden' }}>
      <RestaurantPage />
      <Plates />
    </main>
  )
}
