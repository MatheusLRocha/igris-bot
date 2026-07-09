import {
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    SlashCommandBuilder,
    ActionRowBuilder,
    ComponentType,
} from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('pokemon')
        .setDescription('Um pokemon favorito'),
    async execute(interaction) {
        const favoriteStarterSelect = new StringSelectMenuBuilder()
            .setCustomId('starter')
            .setPlaceholder('Faça uma seleção!')
            .addOptions(
                new StringSelectMenuOptionBuilder()
                    .setLabel('Bulbasaur')
                    .setDescription('The dual-type Grass/Poison Sedd Pokémon.')
                    .setValue('bulbasaur'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Charmander')
                    .setDescription('The Fire-type Lizard Pokémon.')
                    .setValue('charmander'),
                new StringSelectMenuOptionBuilder()
                    .setLabel('Squirtle')
                    .setDescription('The Water-type Tiny Turtle Pokémon')
                    .setValue('squirtle'),
            );

        const row = new ActionRowBuilder().addComponents(favoriteStarterSelect);

        const response = await interaction.reply({
            content: 'Escolha seu pokemon inicial!',
            components: [row],
            withResponse: true,
        });

        const collector = response.resource.message.createMessageComponentCollector({
            componentType: ComponentType.StringSelect,
            time: 3_600_000,
        });

        collector.on('collect', async (i) => {
            const selection = i.values[0];
            await i.reply(`${i.user} selecionou ${selection}!`);
        });
    },
};