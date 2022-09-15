export const fetchPaymentApi = async (
  products,
  authUser,
  address,
  values,
  priceShipping
) => {
  try {
    const res = await fetch('/api/payment', {
      body: JSON.stringify({
        products,
        idUser: authUser.uid,
        username: authUser.name,
        addressShipping: address,
        values,
        priceShipping,
      }),
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    })

    const response = await res.json()
    return response
  } catch (err) {
    console.log(ree)
  }
}
