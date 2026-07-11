import { EmbedBuilder } from 'discord.js';
import config from '../config.js';

export default async function SendDailyNews(client) {
    const newsToken = process.env.THE_NEWS_TOKEN;

    const newsChannelId = config.newsChannelId;

    const channel = await client.channels.fetch(newsChannelId);

    const response = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${newsToken}&locale=br&language=pt&limit=3`);
    const news = await response.json();

    for (const article of news.data) {
        const embed = new EmbedBuilder()
        .setColor('#9410DA')
        .setTitle('Notícia do dia')
        .addFields({
            name: article.title,
            value: article.description,
        })
        .setImage(article.image_url)
        .setFooter({ text: `Fonte: ${article.url}` })
        .setTimestamp();

        await channel.send({ embeds: [embed] });
    }
};