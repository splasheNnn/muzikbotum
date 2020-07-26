const { canModifyQueue } = require("../util/EvobotUtil");

module.exports = {
  name: "döngü",
  aliases: [''],
  description: "Şarkı döngüsünü ayarlar",
  execute(message) {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.reply(":no_entry_sign:  **__Şuanda şarkı çalmıyor.**").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    // toggle from false to true and reverse
    queue.loop = !queue.loop;
    return queue.textChannel
      .send(`**__Şarkı döngüsü :** ${queue.loop ? "**açık**" : "**kapalı**"}`)
      .catch(console.error);
  }
};
