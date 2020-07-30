const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  description: "Etiketlenen kişiyi sunucudan kickler",
  execute(message) {

 if (!message.guild) return;

 
  if (message.content.startsWith('!!kick')) {
    
    const user = message.mentions.users.first();
  
    if (user) {
   
      const member = message.guild.member(user);
    
      if (member) {
      
        member
          .kick('Bir sorun meydana geldi')
          .then(() => {
         
            message.reply(`Başarıyla atıldı ${user.tag}`);
          })
          .catch(err => {
           
            message.reply('Bir sorun meydana geldi');
         
            console.error(err);
          });
      } else {
      
        message.reply("Kişi sunucuda bulunmuyor!");
      }
    
    } else {
      message.reply("Kicklemem için herhangi birisini etiketlemedin!");
    }
  }
}

  }
;
