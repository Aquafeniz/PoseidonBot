const Discord = require(`discord.js`)
const client = new Discord.Client();

const config = require('./config.json')
const command = require(`./command`)
const prefix = config.Prefix;
const logo = 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png';


client.on('ready',() => {
    console.log('POSEIDON BOT ENCENDIDO | Powered By Poseidon Studio')    
    client.user.setActivity('Powered By: NEOPOSEIDON',{type: "PLAYING"});
})

client.on("message", (message) =>
{
    ///--------------------------------
   if (!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split('///'); 
   const command = args.shift().toLowerCase();

//#region Factura
   if (command === 'factura') {
       if (!args.length) {
           return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
       }
   

   const exampleEmbed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle('**FACTURACION**')
   .setDescription('**Importante:** Dejar comprobante de Pago cuando realize el pago')
   .addField('Concepto',`${args[0]}`)
   .addField('Precio',`${args[1]}`)
   .addField('Cuenta',`0000-**${args[2]}** - Poseidon Designs ((${args[3]}))`)
   .setTimestamp()
   .setImage(`${args[4]}`)
   .setFooter('Dpto Cobros', 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png');

   message.delete();
   message.channel.send(exampleEmbed);
   }
//#endregion

//#region Flyers
if (command === 'flyer') {
   if (!args.length) {
       return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
   }
   const exampleEmbed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle(`${args[0]}`)
   .setAuthor('Flyers', 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png', 'https://discord.gg/FArkZwJuJz')
   .setDescription(`${args[1]}`)
   .setImage(`${args[3]}`)
   .setTimestamp()
   .setFooter(`${args[2]}`, 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png');

   message.delete();
   message.channel.send(exampleEmbed);
}
//#endregion

//#region Avisos
if (command === 'avisos') {
   if (!args.length) {
       return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
   }

   const exampleEmbed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle(`${args[0]}`)
   .setAuthor(`${args[1]}`, 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png', 'https://discord.gg/FArkZwJuJz')
   .setDescription(`${args[2]}`)
   .setFooter(`${args[3]}`)
   .setTimestamp()

   message.delete();
   message.channel.send(exampleEmbed);
}

if (command === 'imagen') {
   if (!args.length) {
       return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
   }

   const exampleEmbed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle(`${args[0]}`)
   .setAuthor(`${args[1]}`, 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png', 'https://discord.gg/FArkZwJuJz')
   .setDescription(`${args[2]}`)
   .setImage(`${args[3]}`)
   .setTimestamp()

   message.delete();
   message.channel.send(exampleEmbed);
}

if (command === 'thumbnail') {
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
 
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${args[0]}`)
    .setAuthor(`${args[1]}`, 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png', 'https://discord.gg/FArkZwJuJz')
    .setDescription(`${args[2]}`)
    .setThumbnail(logo)
    .setTimestamp()
 
    message.delete();
    message.channel.send(exampleEmbed);
 }

//#endregion

//#region Patrocionadores
if (command === 'patrocionador') {
   if (!args.length) {
       return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
   }
   const exampleEmbed = new Discord.MessageEmbed()
   .setColor('#0099ff')
   .setTitle(`${args[0]}`)
   .setAuthor('Colaboradores', 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png', 'https://discord.gg/FArkZwJuJz')
   .setDescription(`${args[1]}`)
   .setImage(`${args[2]}`)
   .setThumbnail(`${args[3]}`)
   .setTimestamp()
   .setFooter(`Poseidon Designs `, 'https://media.discordapp.net/attachments/803750596648894494/816001430002466896/603845_19478879_3545450_c58481ff_image.png');
   

   message.delete();
   message.channel.send(exampleEmbed);
}
//#endregion

//#region Precios
if (command === 'tarifas') {
    
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`PRECIOS`,`https://discord.gg/FArkZwJuJz`)
    .setAuthor('Colaboradores', logo, 'https://discord.gg/FArkZwJuJz')
    .setDescription(`Lista de Precios actualizada para Poseidon Studio, 19 de Abril 2021. Cualquier Trabajo pendiente seguira al mismo costo, Includo los precios de los patrocionadores (Los precios de los patrocionadores tendran descuestos)`)
    .setThumbnail(logo)
    .setTimestamp()
    .setFooter(`Poseidon Studio `, logo)
    
    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'Flyers', value: 'Lista de Precios Actualizada' },
		{ name: 'Flyer Basico', value: '$55.000', inline: true },
		{ name: 'Flyer Tematico', value: '$65.000', inline: true },
    )

    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'APPS', value: 'Lista de Precios de las Apps ((Discord))' },
		{ name: 'Basica', value: '$95.000', inline: true },
		{ name: 'Descrpcion', value: '[Máximo 40 canales y 15 roles] + [Formularios Google, bots simples]', inline: true },
    )

    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'WEBS', value: 'Lista de Precios de las Webs((Fotos para el Foro))' },
		{ name: 'Basica', value: '$115.000', inline: true },
    )

    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'BRANDING (NUEVO)', value: '¿Quieres sacar tu marca adelante? Esta es tu opcion' },
		{ name: 'Logo Basico', value: '$30.000', inline: true },
		{ name: 'Logo Premium', value: '$45.000', inline: true },
        { name: 'Concepto de Marca+Logos', value: '$55.000', inline: true },
        { name: 'Crear empresa de 0 ', value: 'Consultar', inline: true },
    )

    .addFields(
        { name: '\u200B', value: '\u200B' },
		{ name: 'FOTOGRAFIA (NUEVO)', value: '¿Quieren inmortalizar tus momentos?' },
		{ name: 'Sesion de Fotos(Individual)', value: '$15.000 Sesion', inline: true },
        { name: 'Sesion de Fotos(Grupal)', value: '$10.000 Sesion + $10.000 Persona', inline: true },
		{ name: 'Evento', value: '$65.000', inline: true },
    )

    message.delete();
    message.channel.send(exampleEmbed);
 }
 //#endregion

//-------------
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
