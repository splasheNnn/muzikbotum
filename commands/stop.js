const { canModifyQueue } = require("../util/EvobotUtil");


module.exports = {
  name: "durdur",
  aliases: ["siktir","sie","kapat","bitir"],
  description: "Şarkıyı durdurur",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if (!queue) return message.reply("**__Şuanda hiçbir şarkı çalmıyor__**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏹ **__şarkıyı durdurdu!__**`).catch(console.error);
  }
};
