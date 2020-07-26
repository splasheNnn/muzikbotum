const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["y"],
  description: "Müzik komutlarını listeler",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("Izuku Müzik | Yardım")
      .setDescription("**__Tüm Müzik Komutları__**")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} `()` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
