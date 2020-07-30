const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Avatarınızı gösterir",
  execute(message) {

    let nowPlaying = new MessageEmbed()
      .setTitle("**İşte Avatarın**")
      .setDescription(`${msg.author.avatarURL()}`)
      .setColor("#F8AA2A")
      .setTimestamp();


    return message.channel.send(nowPlaying);
  }
};
