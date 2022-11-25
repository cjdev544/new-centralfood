const jwt = require('jsonwebtoken')

export default async function handler(req, res) {
  const { authorization } = req.headers
  const token = authorization.split(' ')[1]

  let validate

  validate = jwt.verify(
    token,
    process.env.REVALIDATE_SECRET_TOKEN,
    (err, token) => {
      if (err) {
        return res.status(401).json({
          msg: 'Invalid token',
        })
      }
      const { path } = token

      // waiting create the document in database
      setTimeout(() => {
        res
          .revalidate(path)
          .then(() => {
            return res.status(200).json({
              msg: 'La página esta siendo actualizada',
              token,
            })
          })
          .catch((err) => {
            console.error(err)
            return res.status(500).json({
              msg: 'No se pudo actualizar la página, intente mas tarde',
            })
          })
      }, 20000)
    }
  )
}
