import { Events } from 'discord.js';

export default {
    name: Events.GuildMemberRemove,
    async execute(member) {
        console.log(`${member.user.username} saiu`);
    },
};