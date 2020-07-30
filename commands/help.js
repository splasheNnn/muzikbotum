const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "yardım",
  aliases: ["y"],
  description: "Müzik komutlarını listeler",
  execute(message) {
    let commands = message.client.commands.array() 
    let helpEmbed = new MessageEmbed()
      .setTitle("Izuku Müzik | Yardım")
      .setImage("https://media2.giphy.com/media/kggtkeYWsl9aLpH5to/giphy.gif")
      .setDescription("**__Tüm Müzik Komutları__**")
      .setColor("#F8AA2A");
      
      
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**✯ |  ${message.client.prefix}${cmd.name} **`,
        `${cmd.description}`,
        
        `______________________________________________________`
        
        `
  <a:tik3:735917623551852575> ▏** Botu Sunucuna Davet Et =** [Davet](https://discord.com/oauth2/authorize?client_id=656531150897938453&scope=bot&permissions=2146958591)


  <a:tik3:735917623551852575> ▏** Destek Sunucusu =** [Destek](https://discord.gg/VMCb3yR)
   

  <a:tik3:735917623551852575> ▏** Atha Bot Sitesi =** [Site](https://atha-bot-site.glitch.me/)


  <a:tik3:735917623551852575> ▏** Bota Oy Ver =** [Oy](https://top.gg)`
        
  
        true
      );
    });
  
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
    
    



  }
};
