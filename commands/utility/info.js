import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Pega informação sobre um usuário ou servidor!')
        .addSubcommand((subcommand) =>
            subcommand
                .setName('user')
                .setDescription('Informação sobre o  usuário')
                .addUserOption((option) => option.setName('alvo').setDescription('O usuário')),
        )
        .addSubcommand((subcommand) =>
            subcommand
                .setName('server')
                .setDescription('Informação sobre o servidor'),
        ),
    async execute(interaction) {
        const subcommand = interaction.options.getSubcommand();

        if (subcommand === 'user') {
            const user = interaction.options.getUser('alvo');

            if (user) {
                await interaction.reply(`Username: ${user.username}\nID: ${user.id}`);
            }
            else {
                await interaction.reply(`Seu username: ${user.username}\nSeu ID: ${user.id}`);
            }

        }
        else if (subcommand === 'server') {
            const guild = interaction.guild;

            await interaction.reply(`Servidor: ${guild}\nMembros: ${guild.memberCount}`);
        }
    },
};