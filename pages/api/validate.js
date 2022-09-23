export default async function handler(req, res) {
  if (req.body.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    await res.revalidate(`/${req.body.path}`)

    return res.json({ revalidated: true })
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }
}
