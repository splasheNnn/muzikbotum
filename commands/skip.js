const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "geç",
  aliases: ["g"],
  description: "Çalmakta olan şarkıyı geçer",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("**__Şu anda hiçbir şarkı çalmıyor__**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ **__şarkıyı geçti__**`).catch(console.error);
  }
};
