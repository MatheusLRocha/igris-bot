import { Events } from 'discord.js';
import config from '../config.js';

export default {
    name: Events.GuildMemberRemove,
    async execute(member) {
        const channel = await member.guild.channels.fetch(config.welcomeChannelId);

        await channel.send(`${member.user} rebolou errado pros crias`);
    },
};