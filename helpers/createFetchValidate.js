export const createFetchValidate = async (path, secret) => {
  // fetch(`http://localhost:3000/api/revalidate`)
  // const baseUrl = req.headers.host
  const res = await fetch(`http://localhost:3000/api/revalidate?${secret}`, {
    // body: JSON.stringify({
    //   path,
    // }),
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
  })

  console.log({ res })
  return res.status(200).json({ ok: true })
}
