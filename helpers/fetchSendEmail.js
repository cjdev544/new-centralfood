export const fetchSendEmail = async (email, order) => {
  try {
    const res = await fetch('/api/email', {
      body: JSON.stringify({
        email,
        order,
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
