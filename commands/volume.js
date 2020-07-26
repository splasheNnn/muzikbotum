const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "volume",
  aliases: ["v"],
  description: "Şarkının sesini ayarlar",
  execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply("**__Şuanda hiçbir şarkı çalmıyor.__**").catch(console.error);
    if (!canModifyQueue(message.member))
      return message.reply(":no_entry_sign: **__Önce bir sesli kanala bağlanman gerekiyor__**").catch(console.error);

    if (!args[0]) return message.reply(`🔊 ** Şuanki ses:** **${queue.volume}%**`).catch(console.error);
    if (isNaN(args[0])) return message.reply("**Lütfen şarkının sesini ayarlamak istediğiniz değeri girin.**").catch(console.error);
    if (parseInt(args[0]) > 100 || parseInt(args[0]) < 0)
      return message.reply("Please use a number between 0 - 100.").catch(console.error);

    queue.volume = args[0];
    queue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    return queue.textChannel.send(`**__Şarkının sesi:__** **${args[0]}%** `).catch(console.error);
  }
};
