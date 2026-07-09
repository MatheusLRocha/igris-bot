import { Events, MessageFlags } from 'discord.js';

export default {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
            }
            catch (error) {
                console.error(error);

                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp({
                        content: 'There was an error while executing this command!',
                        flags: MessageFlags.Ephemeral,
                    });
                }
                else {
                    await interaction.reply({
                        content: 'There was an error while executing this command!',
                        flags: MessageFlags.Ephemeral,
                    });
                }
            }
        }
        else if (interaction.isModalSubmit()) {
            if (interaction.customId === 'myModal') {
                await interaction.reply({ content: 'Seu formulário foi recebido com sucesso!' });

                const hobbies = interaction.fields.getTextInputValue('hobbiesInput');
                const games = interaction.fields.getStringSelectValues('games');

                await interaction.followUp(`Seus hobbies: ${hobbies}\nSeu jogo favorito: ${games}`);
            }
        }
    },
};