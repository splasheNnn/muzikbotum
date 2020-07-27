/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");
const { MessageEmbed } = require("discord.js");
const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}yardım`);
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});


client.on("guildCreate", guild => {
  let log = client.channels.cache.get("737028694710812799");
  const embed = new MessageEmbed()
    .setAuthor("Yeni bir sunucuya eklendim!")
    .setThumbnail("https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif")
   .setColor("RED")
       .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.cache.size}\`\nKanal Sayısı: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.avatarURL);
  log.send(embed);
});
client.on("guildDelete", guild => {
  let log = client.channels.cache.get("737028694710812799");
  const embed = new MessageEmbed()
    .setAuthor("Bir sunucudan atıldım -_-")
    .setThumbnail("https://cdn.discordapp.com/attachments/663343412031782947/670657121423196201/mafya_gif.gif")
    .setColor("RED")
       .addField("» Sunucu İsmi:", `**${guild.name}**`)
    .addField("» Sunucu ID:", `\`\`\`${guild.id}\`\`\``)
    .addField(
      "Sunucu Bilgisi:",
      `**Sunucu Sahibi: \`${guild.owner}\`\nSunucu Bölgesi: \`${guild.region}\`\nÜye Sayısı: \`${guild.members.cache.size}\`\nKanal Sayısı: \`${guild.channels.cache.size}\`**`
    )
    .setTimestamp()
    .setFooter(client.user.username, client.user.displayAvatarURL());
  log.send(embed);
});
 

	
client.on("guildCreate", async guild => {
  const izuku = new MessageEmbed()
    .setTitle('Izuku Music |👑')
         .addField('✯ |  !!yardım === Müzik komutlarını listeler')
  
	 .addField('✯ |  !!çal === İsmini yazdığınız şarkıyı çalmaya başlar')
  
	 .addField('✯ |  !!bitir === Çalan şarkıyı bitirir')
  
	 .addField('✯ |  !!geç === Çalan şarkıdan bir sonraki şarkıya geçer')
  
	 .addField('✯ |  !!şarkıyageç === Sıradan numarasını verdiğiniz bir şarkıya geçer')
		   
	 .addField('✯ |  !!durdur === Şarkıyı durdurur')
  
	 .addField('✯ |  !!devamet === Şarkıyı devam ettirir')
  
	 .addField('✯ |  !!sil === Sıradan numarasını verdiğiniz bir şarkıyı siler')
  
	 .addField('✯ |  !!playlist === YouTubeden bir playlist çalar')
  
         .addField('✯ |  !!karıştır === Şarkı sırasındaki şarkıları karışık olarak çalar.')
  
	 .addField('✯ |  !!döngü === Şarkıyı sürekli çalacak şekilde döngülü olarak ayarlar')
         .addField('✯ |  !!volume === Şarkının sesini ayarlarsınız')
        
    .setImage('https://thumbs.gfycat.com/UnderstatedObviousAmericancrocodile-size_restricted.gif')
 
  guild.owner.send(izuku);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});
