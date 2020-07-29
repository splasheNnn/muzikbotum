const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "avatar",
  aliases: ["y"],
  description: "Müzik komutlarını listeler",
  execute(message) {
    let commands = message.client.commands.array() 
    let user = message.mentions.users.first()
    let helpEmbed = new MessageEmbed() 
      .setTitle("Kullanıcının avatarı!")
      .setImage(user.displayAvatarURL())
      .setColor("#F8AA2A");
      
      
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**✯ |  ${message.client.prefix}${cmd.name} **`,
        `${cmd.description}`,
        
  
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
    
    



  }
};
