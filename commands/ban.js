const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ban",
  description: "Etiketlenen kişiyi sunucudan banlar",
  execute(message) {

 if (!message.guild) return;

 
  if (message.content.startsWith('!!ban')) {
    
    const user = message.mentions.users.first();
  
    if (user) {
   
      const member = message.guild.member(user);
    
      if (member) {
      
        member
          .ban('Bir sorun meydana geldi')
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
      message.reply("Banlamam için herhangi birisini etiketlemedin!");
    }
  }
}

  }
;
