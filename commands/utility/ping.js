import { SlashCommandBuilder, LabelBuilder, ModalBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, TextDisplayBuilder, TextInputBuilder, TextInputStyle } from 'discord.js';

export default {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Responde com Pong!'),
    async execute(interaction) {
        // await interaction.reply('Pong!');
        // await interaction.followUp({ content: 'Secret Pong!', flags: MessageFlags.Ephemeral });

        const modal = new ModalBuilder().setCustomId('myModal').setTitle('My Modal');

        const hobbiesInput = new TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Jogos, filmes, livros etc.');

        const hobbiesLabel = new LabelBuilder()
            .setLabel('Quais são alguns dos seus hobbies?')
            .setDescription('Atividades que você gosta de fazer')
            .setTextInputComponent(hobbiesInput);

        const favoriteGameSelect = new StringSelectMenuBuilder()
            .setCustomId('games')
            .setPlaceholder('Selecione algo!')
            .setRequired(true)
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Valorant')
                    .setDescription('Jogo FPS de 5 contra 5')
                    .setValue('valorant'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Read Dead Redemption 2')
                    .setDescription('Jogo de faroeste')
                    .setValue('rdr2'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Minecraft')
                    .setDescription('Jogo de blocos quadrados')
                    .setValue('minecraft'),
            );

        const favoriteGameLabel = new LabelBuilder()
            .setLabel('Qual o seu jogo favorito?')
            .setStringSelectMenuComponent(favoriteGameSelect);

        const text = new TextDisplayBuilder().setContent(
            'Texto paralelo do conteúdo do modal, aqui pode ter qualquer coisa',
        );

        modal.addLabelComponents(hobbiesLabel, favoriteGameLabel);
        modal.addTextDisplayComponents(text);

        await interaction.showModal(modal);
    },
};