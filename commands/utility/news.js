import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('news')
        .setDescription('Notícias diárias'),
    async execute(interaction) {
        await interaction.deferReply();

        const newsToken = process.env.THE_NEWS_TOKEN;

        const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${newsToken}&locale=br&language=pt&limit=3`);
        const news = await response.json();

        for (const article of news.data) {
            const embed = new EmbedBuilder()
            .setColor('DarkPurple')
            .setTitle('Notícia do dia')
            .addFields({
                name: article.title,
                value: article.description,
            })
            .setImage(article.image_url)
            .setFooter({ text: `Fonte: ${article.url}` })
            .setTimestamp();

            interaction.followUp({ embeds: [embed] });
        }
    },
};