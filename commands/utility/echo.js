import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Responde com o que você digitou!')
        .addStringOption((option) =>
            option.setName('input').setDescription('O input para responder').setRequired(true),
        ),
    async execute(interaction) {
        const message = interaction.options.getString('input');

        await interaction.reply(message);
    },
};