export const fetchPaymentApi = async (
  routeApi,
  products,
  authUser,
  address,
  values,
  priceShipping
) => {
  try {
    const res = await fetch(`/api/${routeApi}`, {
      body: JSON.stringify({
        products,
        idUser: authUser.uid,
        username: authUser.displayName,
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
  } catch (err) {}
}
