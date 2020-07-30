const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["y"],
  description: "Müzik komutlarını listeler",
  execute(message) {

    let helpEmbed = new MessageEmbed()
      .setTitle("")

      
  
  
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
    
    



  }
};
