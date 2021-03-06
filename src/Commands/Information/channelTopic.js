module.exports = {
    name: 'channeltopic',
    aliases: ["ct"],
    category: 'Information',
    description: 'View the topic of the current or a specified channel!',
    usage: '<channel?',
    permissions: 'SEND_MESSAGES',
    clientPerms: 'SEND_MESSAGES',
    creatorOnly: false,
    guildOnly: true,
    premiumOnly: false,
    requiresArgs: false,
    run: async (client, msg, args) => {
        let channel;
        if(args[0]) {
            channel = client.getChannel(msg, args[0]);
        } else {
            channel = msg.channel;
        }
        let embed = new client.Embed()
            .setAuthor(`${channel.name} • Topic`, channel.guild.iconURL())
            .setDescription(channel.topic ? channel.topic : "The specified channel has no topic!")
            .setFooter("Livida • Information")
        msg.channel.send(embed);
    }
  };