import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('quack')
        .setDescription('Mostra uma foto aleatória de gatos'),
    async execute(interaction) {
        await interaction.deferReply();

        const response = await fetch('https://random-d.uk/api/random');
        const { url } = await response.json();

        interaction.editReply({ files: [url] });
    },
};