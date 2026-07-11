import { Events, EmbedBuilder, AttachmentBuilder } from 'discord.js';
import config from '../config.js';

export default {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const channel = await member.guild.channels.fetch(config.welcomeChannelId);

        const file = new AttachmentBuilder('./assets/Wingman.jpg');

        const embed = new EmbedBuilder()
            .setColor('#0DD951')
            .setTitle(`Bem vindo à ${member.guild.name}!`)
            .setDescription(`${member.user} entrou no servidor`)
            .setThumbnail(member.displayAvatarURL())
            .setImage('attachment://Wingman.jpg');

        const memberRole = config.memberRoleId;
        try {
            await member.roles.add(memberRole);
        }
        catch (error) {
            console.error(`Erro ao adicionar cargo para membro: ${error}`);
        }

        await channel.send({ embeds: [embed], files: [file] });
    },
};