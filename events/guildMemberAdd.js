import { Events, EmbedBuilder, AttachmentBuilder } from 'discord.js';

export default {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const channel = await member.guild.channels.fetch('1276954042920341524');

        const file = new AttachmentBuilder('./assets/Wingman.jpg');

        const embed = new EmbedBuilder()
            .setColor('#0DD951')
            .setTitle(`Bem vindo à ${member.guild.name}!`)
            .setDescription(`${member.user} entrou no servidor`)
            .setThumbnail(member.displayAvatarURL())
            .setImage('attachment://Wingman.jpg');

        await channel.send({ embeds: [embed], files: [file] });
    },
};