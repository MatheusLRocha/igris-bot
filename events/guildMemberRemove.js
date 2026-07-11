import { Events } from 'discord.js';

export default {
    name: Events.GuildMemberRemove,
    async execute(member) {
        const channel = await member.guild.channels.fetch('1276954042920341524');

        await channel.send(`${member.user} rebolou errado pros crias`);
    },
};