import { MessageFlags, SlashCommandBuilder } from 'discord.js';

export default {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
        await interaction.followUp({ content: 'Secret Pong!', flags: MessageFlags.Ephemeral });
    },
};