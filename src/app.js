const { promises } = require('fs')

async function run() {
    const filetarget = 'super-secret-file.txt.enc'
    console.log('Writing file to: ', filetarget)

    const text = `Agora: ${new Date().toISOString()}`
    await promises.writeFile(filetarget, text)
    
    console.log(`Decrypted: `, (await promises.readFile(filetarget)).toString())
    console.log('Finished!')
}

module.exports = { run }