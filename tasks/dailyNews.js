import { EmbedBuilder } from 'discord.js';

export default async function SendDailyNews(client) {
    const newsToken = process.env.THE_NEWS_TOKEN;
    const newsChannelToken = process.env.NEWS_CHANNEL_ID;

    const channel = await client.channels.fetch(newsChannelToken);

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

        await channel.send({ embeds: [embed] });
    }
};