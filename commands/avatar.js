const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Avatarınızı gösterir",
  execute(message) {

    let nowPlaying = new MessageEmbed()
      .setTitle("**İşte Avatarın**")
      .setImage( `${msg.author.avatarURL({size : 1024})}`)
      .setColor("#F8AA2A")
      .setTimestamp();


    return message.channel.send(nowPlaying);
  }
};
