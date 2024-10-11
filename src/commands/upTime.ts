import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';
const humanizeDuration = require('humanize-duration');

export const data = new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Shows the current bot uptime');
export async function execute(interaction: ChatInputCommandInteraction) {

    const uptime = humanizeDuration(process.uptime() * 1000, { round: true });

    const embed = new EmbedBuilder()
        .setTitle(uptime)
        .setColor('#0099ff');

    await interaction.reply({ embeds: [embed] });
}
