import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder().setName('user').setDescription('Mostra informações sobre o usuário.'),
    async execute(interaction) {
        await interaction.reply(
            `Esse comando foi executado por ${interaction.user.username}, que entrou na data ${interaction.member.joinedAt}`,
        );
    },
};