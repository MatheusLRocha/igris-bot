import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

function CreateEmbed(message, url) {
    const embed = new EmbedBuilder()
        .setColor('DarkGold')
        .setTitle('Pato')
        .setDescription('Um pato aleatório')
        .addFields(
            { name: 'Sobre', value: 'Patos' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Estilo', value: 'Fantástico pato', inline: true },
            { name: 'Animal', value: 'Pato', inline: true },
        )
        .addFields({ name: 'Pato', value: 'Pato', inline: true })
        .setImage(url)
        .setTimestamp()
        .setFooter({ text: message });

    return embed;
}

export default {
    data: new SlashCommandBuilder()
        .setName('quack')
        .setDescription('Mostra uma foto aleatória de gatos'),
    async execute(interaction) {
        await interaction.deferReply();

        const response = await fetch('https://random-d.uk/api/random');
        const { message, url } = await response.json();

        const embed = await CreateEmbed(message, url);

        interaction.editReply({ embeds: [embed] });
    },
};