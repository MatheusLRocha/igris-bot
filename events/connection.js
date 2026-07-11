import { Events } from 'discord.js';
import SendDailyNews from '../tasks/dailyNews.js';
import cron from 'node-cron';

export default {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);


        cron.schedule('0 9 * * *', async () => {
            try {
                await SendDailyNews(client);
            }
            catch (error) {
                console.error(`Erro ao enviar notícias: ${error}`);
            }
        }, { timezone: 'America/Sao_Paulo' });
    },
};