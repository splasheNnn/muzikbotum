const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "şarkıyageç",
  aliases: ["şg"],
  description: "Sırada numarasını belirttiğiniz şarkıya geçer",
  execute(message, args) {
    if (!args.length)
      return message
        .reply(`**Kullanım:** ${message.client.prefix}${module.exports.name} <Şarkının Sıra Numarası>`)
        .catch(console.error);

    if (isNaN(args[0]))
      return message
           .reply(`**Kullanım:** ${message.client.prefix}${module.exports.name} <Şarkının Sıra Numarası>`)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("**__Şuanda bir çalma listesi yok__**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (args[0] > queue.songs.length)
      return message.reply(`**__Sıra sadece ${queue.songs.length} şarkıdan oluşabilir!__**`).catch(console.error);

    queue.playing = true;
    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ **__Sıra'dan bir şarkıya geçti__** ${args[0] - 1} songs`).catch(console.error);
  }
};
