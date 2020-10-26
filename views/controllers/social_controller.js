const Social = require('../../DB/models/social_accont')
social_controller = {}

social_controller.getAccounts = async() => {

    const accounts = await Social.find({})

    return accounts

}

social_controller.insertAccount = async(name, img, url) => {
    const newAccount = await new Social({
        'name': name,
        'img': img,
        'url': url
    })

    await newAccount.save(function(err, account) {
        if (err) return console.error(err)
        console.log(account.name)
    })
}

module.exports = social_controller