const { prexfix } = require ('./config.json')

module.exports = (client, aliases,callback ) => {    
    if (typeof aliases === 'string'){
        aliases = [aliases]
    }

   
    client.on('message', message => {
        const { content } = message

        aliases.forEach(alias => {
            const command = `${Prefix}${alias}`

            if (content.startWith(`${command}`) || content === command) {
                console.log(`Running the command ${command}}`)
                callback(message)
            }
        });
    })
}