const { createCipheriv, createDecipheriv } = require('crypto')

class CryptoHelper {
    constructor({ cryptoKey }) {
        // AES-192-ECB => Advanced Encryption Starndard - 192bits (24 char) - Electronic Code Book (Mais simples) 
        // openssl list -cipher-algorithms

        this.cryptoConfig = Object.values({
            algorithm: 'aes-192-ecb',
            cryptoKey,
            initializationVectorKey: null
        })
    }

    static async setup({ cryptoKey }) {
        return new CryptoHelper({ cryptoKey })
    }

    async encrypt(data) {
        const cipher = createCipheriv(...this.cryptoConfig)
        return cipher
            .update(data, 'utf8', 'base64')
            .concat(cipher.final('base64'))
    }

    async decrypt(data) {
        const decipher = createDecipheriv(...this.cryptoConfig)
        return decipher
            .update(data.toString(), 'base64', 'utf8')
            .concat(decipher.final('utf8'))
    }
}

module.exports = CryptoHelper