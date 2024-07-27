const notFound = (req,res) => {
    res.status(404).json('Route Does not Exist....')
}

module.exports = notFound;