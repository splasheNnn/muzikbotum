const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "devamet",
  aliases: ["r"],
  description: "Durmuş bir şarkıyı devam ettirir",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(":no_entry_sign: **__Şuanda hiçbir şarkı çalmıyor.__**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!queue.playing) {
      queue.playing = true;
      queue.connection.dispatcher.resume();
      return queue.textChannel.send(`${message.author} ▶ **__Şarkıyı devam ettirdi!__**`).catch(console.error);
    }

    return message.reply(":no_entry_sign: **__Şarkı durmamış.__**").catch(console.error);
  }
};
