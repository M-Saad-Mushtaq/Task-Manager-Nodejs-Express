const { customError } = require('../errors/customError')
const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.status).json({ msg: err.msg })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

module.exports = errorHandler
