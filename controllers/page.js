const home = async (req, res) => {
    console.log('entrei')
    res.render('index')
}

module.exports = {
    home
}