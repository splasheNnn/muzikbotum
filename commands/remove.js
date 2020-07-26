const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "sil",
  description: "Sıradan müzik siler",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send(":no_entry_sign: **__Şuanda sıra yok__**").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    
    if (!args.length) return message.reply(`**Kullanım:** ${message.client.prefix}sil <Şarkının Sıra Numarası>`);
    if (isNaN(args[0])) return message.reply(`**Kullanım:** ${message.client.prefix}sil <Şarkının Sıra Numarası>`);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌  **${song[0].title}** **__adlı şarkıyı sıradan sildi.__**`);
  }
};
