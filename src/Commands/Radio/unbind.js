module.exports = {
    name: 'unbind',
    aliases: [],
    category: 'Radio',
    description: 'Unbinds the radio from the channel.',
    usage: '[voice_channel]',
    permissions: 'MANAGE_SERVER',
    clientPerms: 'SEND_MESSAGES',
    creatorOnly: false,
    guildOnly: true,
    premiumOnly: false,
    requiresArgs: true,
    run: async (client, msg, args) => {
        const { RadioBindings } = require(`${process.cwd()}/src/Structures/Constants/Models.js`);
        const data = await RadioBindings.find({guildID: msg.guild.id});
        if(data[0].channelID !== client.getChannel(msg, args[0]).id) return msg.channel.send({embed: {description: "The bot is not bound to the specified voice channel!"}});
        query = {channelID: client.getChannel(msg, args[0]).id, binded: false};
        RadioBindings.update({guildID: msg.guild.id}, query, {upsert: true}, function(err, doc) {
          if (err) return msg.channel.send(err);
        });
        let embed = new client.Embed()
            .setDescription(`Successfully unbound the specified voice channel to the bot, the bot will no longer join that voice channel when a user connects!`)
        msg.channel.send(embed);
    }
  } 
  