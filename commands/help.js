const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let emoji = client.emojis.get("735917658393935984") 
      message.react(emoji)
  
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('__Yardım Menüsü__')
  .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735177569384792084/unknown.png')
  
  .setDescription(`
  <a:maden:734418218499964949> ▏\**-yardım __eğlence__**\   ✒ _Eğlence Komutları_  \n
  <a:maden:734418218499964949> ▏\**-yardım __moderasyon__**\    ✒  _Moderasyon Komutları_  \n
  <a:maden:734418218499964949> ▏\**-yardım __kullanıcı__**\  ✒ _Kullanıcı Komutlarını Listeler_\n
  <a:maden:734418218499964949> ▏\**-yardım __efektler__**\ ✒ _Efekt Komutlarını Listeler_\n
  <a:maden:734418218499964949> ▏\**-yardım __sunucu__**\  ✒ _Sunucu Komutlarını Listeler_\n
  
  __------------------------------------------------------------------__


  <a:tik3:735917623551852575> ▏** Botu Sunucuna Davet Et =** [Davet](https://discord.com/oauth2/authorize?client_id=656531150897938453&scope=bot&permissions=2146958591)


  <a:tik3:735917623551852575> ▏** Destek Sunucusu =** [Destek](https://discord.gg/VMCb3yR)
   

  <a:tik3:735917623551852575> ▏** Atha Bot Sitesi =** [Site](https://atha-bot-site.glitch.me/)


  <a:tik3:735917623551852575> ▏** Bota Oy Ver =** [Oy](https://top.gg)
  
   `)
 
  
  
  message.channel.send({embed})
  }
   if (arg === 'eğlence' || arg === '1') {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence  Komutları')
  .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735177878324379741/unknown.png')
  
  .setDescription(`<a:maden:734418218499964949> ▏ \**-slots**\ = **__Slot oynarsınız.__**  \n 
  <a:maden:734418218499964949> ▏ \**-yazıtura**\ = **__Yazı Tura atarsınız  .__**  \n
  <a:maden:734418218499964949> ▏ \**-hub**\ = **__Yazdığınız 2  kelimeye CornHUB efekti ekler.__** \n
  <a:maden:734418218499964949> ▏ \**-mesajdöndür**\ = **__Yazdığınız mesajı ters çevirir.__**  \n 
  <a:maden:734418218499964949> ▏ \**-tkm**\ = **__Bot ile taş kağıt makas oynarsınız.__** \n
  <a:maden:734418218499964949> ▏ \**-boksmakinesi**\ = **__Boks makinesine vurusunuz.__**  \n
  <a:maden:734418218499964949> ▏ \**-düello**\ = **__Etiketlediğiniz kişiyle düello yaparsınız.__**  \n
  <a:maden:734418218499964949> ▏ \**-aşkölçer**\ = **__Etiketlediğiniz kişiyle aşkınızı ölçersiniz  .__**  \n
  <a:maden:734418218499964949> ▏ \**-zarat**\ = **__Zar atarsınız  .__**  \n
  <a:maden:734418218499964949> ▏ \**-mcbaşarım**\ = **__Yazdığınız mesajı MC başarımına çevirir.__** \n`)
  message.channel.send(embed)
  }

   if (arg === 'moderasyon' || arg === '2') {
      const embed = new Discord.RichEmbed()
      .setTitle('Moderasyon Komutları:')
      .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735177945617924137/unknown.png')
      
      .setDescription(` <a:maden:734418218499964949> ▏ \**-mute**\ = **__Etiketlenen kişiyi süreyle muteler __** \n
      <a:maden:734418218499964949> ▏ \**-unmute**\ = **__Etiketlenen kişinin mutesini kaldırır__**\n
      <a:maden:734418218499964949> ▏ \**-ban**\ = **__Etiketlenen kişinin banlar__**\n 
      <a:maden:734418218499964949> ▏ \**-unban**\ = **__Etiketlenen kişinin banını kaldırır__**\n 
      <a:maden:734418218499964949> ▏ \**-kick**\ = **__Etiketlenen kişiyi kickler**\n 
      <a:maden:734418218499964949> ▏ \**-temizle**\ = **__Belirttiğiniz miktarda mesaj siler__**\n 
      <a:maden:734418218499964949> ▏ \**-reklam-taraması**\ = **__Sunucuda reklam taraması yapar__**\n
      <a:maden:734418218499964949> ▏ \**-sunucubilgi**\ = **__Sunucu hakkındaki bilgileri gösterir__**\n
      <a:maden:734418218499964949> ▏  \**-kurallar**\ = **__Hazır kurallar metni atar__**\n
      <a:maden:734418218499964949> ▏  \**-sesmute**\ = **__Etiketlenen kişiye seslide mute atar__**\n
      <a:maden:734418218499964949> ▏  \**-emojiyükle**\ = **__Linkini verdiğiniz emojiyi sunucuya yükler__**\n
      <a:maden:734418218499964949> ▏  \**-sa-as**\ = **__SA-AS sistemini açar/kapatır__**\n
      <a:maden:734418218499964949> ▏  \**-sunucupanel**\ = **__Sunucuya kişi paneli kurar__**\n
      <a:maden:734418218499964949> ▏  \**-ototag**\ = **__Sunucuya OTOTAG ekler__**\n
      <a:maden:734418218499964949> ▏  \**-sa-as**\ = **__SA-AS sistemini açar/kapatır__**\n
      <a:maden:734418218499964949> ▏ \**-kilitle**\ = **__Etiketlenen kanalı belirli bir süreyle kilitler __**\n
      <a:maden:734418218499964949> ▏  \**-slowmode**\ = **__Kullandığınız metin kanalında slowmode ekler__**\n
      <a:maden:734418218499964949> ▏ \**-rol-uyeleri**\ = **__Etiketlenen rolün üyelerini gösterir __**\n`)   
      return message.channel.send(embed);
      message.react('734342565620350976')
     }
  if (arg === 'kullanıcı' || arg === '3') {
      const embed = new Discord.RichEmbed()
      .setTitle('Kullanıcı Komutları:')
      .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735178063326740511/unknown.png')
      .setDescription(` <a:maden:734418218499964949> ▏ \**-avatar**\ = **__Etiketlediğiniz kişinin avatarını gösterir.__** \n
     <a:maden:734418218499964949> ▏ \**-emojiler**\ = **__Sunucuda bulunan emojileri listeler.__** \n
     <a:maden:734418218499964949> ▏ \**-rolbilgi**\ = **__Etiketlenen rolün bilgilerini gösterir.__** \n
     <a:maden:734418218499964949> ▏ \**-kullanıcıbilgim**\ = **__Bilgilerinizi gösterir.__** \n
     <a:maden:734418218499964949> ▏ \**-sunucubilgi**\ = **__Sunucu bilgilerini gösterir.__** \n
     <a:maden:734418218499964949> ▏ \**-servericon**\ = **__Sunucu avatarını gösterir.__** \n 
     <a:maden:734418218499964949> ▏ \**-günsayım**\ = **__Hesap tarihlerinizi gösterir.__** \n 
     <a:maden:734418218499964949> ▏ \**-afk**\ = **__Afk moduna girersiniz.__**\n
     <a:maden:734418218499964949> ▏ \**-yetkilerim**\ = **__Sahip olduğunuz yetkileri gösterir.__**\n
     <a:maden:734418218499964949> ▏ \**-yapımcım**\ = **__Botun yapımcısını gösterir.__**\n
     <a:maden:734418218499964949> ▏ \**-steam**\ = **__Steam'deki bir oyunun bilgilerine bakarsınız.__**\n
     <a:maden:734418218499964949> ▏ \**-komutlar**\ = **__Tüm komutları gösterir.__** \n
     <a:maden:734418218499964949> ▏ \**-top10**\ = **__Botun Top10 sunucusunu gösterir.__**`)     
      return message.channel.send(embed);
      message.react('734342565620350976')
    
  
    
       }
  if (arg === 'efektler' || arg === '4') {
      const embed = new Discord.RichEmbed()
      .setTitle('Efekt Komutları:')
      .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735178471386644511/unknown.png')
      .setDescription(` <a:maden:734418218499964949> ▏ \**-wasted**\ = **__Fotoğrafınıza 'Wasted' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-rip**\ = **__Fotoğrafınıza 'Rip' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-hapishane**\ = **__Fotoğrafınıza 'Hapishane' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-missionpassed**\ = **__Fotoğrafınıza 'Mission Passed' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-afewlater**\ = **__Fotoğrafınıza 'A Few Minutes Later' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-pixel**\ = **__Fotoğrafınıza 'Pixel' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-türk**\ = **__Fotoğrafınıza 'Türk Bayrağı' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-zıtrenk**\ = **__Fotoğrafınıza 'Zıt Renk' efekti ekler.__** \n
      <a:maden:734418218499964949> ▏ \**-magik**\ = **__Fotoğrafınıza 'Magik' efekti ekler.__** \n`)   
      return message.channel.send(embed);
      message.react('734342565620350976')
    

    
       }
  if (arg === 'sunucu' || arg === '5') {
      const embed = new Discord.RichEmbed()
      .setTitle('Sunucu Komutları:')
      .setImage('https://cdn.discordapp.com/attachments/620989964104237077/735178725200756826/unknown.png')
      
      .setDescription(`
      <a:maden:734418218499964949> ▏ \**-güvenlik**\ = **__Güvenlik sistemini ayarlar.__** \n
      <a:maden:734418218499964949> ▏ \**-resimlihgbb**\ = **__Resimli Hoşgeldin/Görüşürüz sistemini ayarlar.__** \n
      <a:maden:734418218499964949> ▏ \**-sayaç **\ = **__Sayaç sistemini ayarlar.__** \n
      <a:maden:734418218499964949> ▏ \**-reklamengel **\ = **__Reklam Engelleme sistemi ayarlar.__** \n
      <a:maden:734418218499964949> ▏ \**-küfürengel **\ = **__Küfür Engelleme sistemi ayarlar.__** \n
      <a:maden:734418218499964949> ▏ \**-kelimefiltre **\ = **__Yazdığınız kelimeyi sunucuda yasaklar.__** \n
      <a:maden:734418218499964949> ▏ \**-kayıtsistemi **\ = **__Kayıt sistemi ayarlar.__** \n`) 
      
      return message.channel.send(embed);
      message.react('734342565620350976')
    
    
  
  
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Yardım',
  usage: 'yardım'
};
