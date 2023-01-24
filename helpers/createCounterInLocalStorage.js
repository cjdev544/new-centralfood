export const createCounterInLocalStorage = (order) => {
  const milSecondsInMinute = 1000 * 60

  if (!order?.cancel) {
    const minuteTarget = order.deliveryIn * milSecondsInMinute
    const dateTarget = new Date(minuteTarget + Date.now())
    const value = (dateTarget - 0).toString()
    localStorage.setItem(`orderCF_${order.id}`, value)
  } else {
    const minuteTarget = 5 * milSecondsInMinute
    const dateTarget = new Date(minuteTarget + Date.now())
    const value = (dateTarget - 0).toString()
    localStorage.setItem(`orderCF_${order.id}`, value)
  }
}
