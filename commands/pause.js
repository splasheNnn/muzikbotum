const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "durdur",
  description: "Pause the currently playing music",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(":no_entry_sign: **__Şuanda hiçbir şarkı çalmıyor.**__").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (queue.playing) {
      queue.playing = false;
      queue.connection.dispatcher.pause(true);
      return queue.textChannel.send(`${message.author} ⏸ **şarkıyı durdurdu.**`).catch(console.error);
    }
  }
};
