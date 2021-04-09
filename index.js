const CryptoHelper = require('./src/crypto')
const app = require('./src/app')

    ; const CustomFSPromises = require('./src/customFSPromises');
const Decorator = require('./src/decorator');
(async () => {
    const config = {
        /*
        AES-192
        24 caracteres *8 = 192 bits
        */
        cryptoKey: 'minha-senha-super-segura'
    }
    const cryptoHelper = await CryptoHelper.setup(config)
    const customFsPromises = new CustomFSPromises({ cryptoHelper }).configure()
    Decorator.decorateModule(customFsPromises, require('fs').promises)
    await app.run()
})()