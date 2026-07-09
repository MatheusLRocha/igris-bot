import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Envia um gif aleatório!')
        .addStringOption((option) =>
            option
                .setName('category')
                .setDescription('A categoria do gif')
                .setRequired(true)
                .setChoices(
                    { name: 'Funny', value: 'gif_funny' },
                    { name: 'Meme', value: 'gif_meme' },
                    { name: 'Movie', value: 'gif_value' },
                ),
        ),
    async execute(interaction) {
        const category = interaction.options.getString('category');

        await interaction.reply(`Categoria escolhida: ${category}`);
    },
};