import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder().setName('server').setDescription('Mostra informações sobre o servidor'),
    async execute(interaction) {
        await interaction.reply(`O nome do servidor é ${interaction.guild.name} e possui ${interaction.guild.memberCount} membros.`);
    },
};