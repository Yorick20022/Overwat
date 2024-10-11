import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
import { tankHeroes, dpsHeroes, supportHeroes } from "../data/allHeroes";

export const data = new SlashCommandBuilder()
    .setName('hero')
    .setDescription('Select a hero with their role')
    .addStringOption(option =>
        option.setName('role')
            .setDescription('The role of the hero')
            .setRequired(true)
            .addChoices(
                { name: 'tank', value: 'role_tank' },
                { name: 'dps', value: 'role_dps' },
                { name: 'support', value: 'role_support' },
            ));
export async function execute(interaction: ChatInputCommandInteraction) {

    let result: any = interaction.options.getString("role")

    let selectedRole: any = null;

    switch (result) {
        case "role_tank":
            result = "Tank"
            selectedRole = tankHeroes[Math.floor(Math.random() * tankHeroes.length)]
            break;
        case "role_dps":
            result = "DPS"
            selectedRole = dpsHeroes[Math.floor(Math.random() * dpsHeroes.length)]
            break;
        case "role_support":
            result = "Support"
            selectedRole = supportHeroes[Math.floor(Math.random() * supportHeroes.length)]
            break;
    }    

    let abilitiesText = '';  // Initialize an empty string to hold the abilities

    // Loop through each ability in the array and append it to the abilitiesText string
    selectedRole.abilities.forEach((ability: string) => {
        abilitiesText += `${ability}\n`;  // Add each ability followed by a newline
    });

    const heroesEmbed = new EmbedBuilder()
        .setColor(0x0099FF)
        .addFields(
            { name: 'Hero:', value: selectedRole.name, inline: true },
            { name: 'Role:', value: result, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
            { name: 'Abilities:', value: abilitiesText, inline: true },
            { name: 'Ult:', value: selectedRole.ult, inline: true },
            { name: '\u200B', value: '\u200B', inline: true },
        )
        .setImage(selectedRole.image)
        .setThumbnail("https://r2.fivemanage.com/pub/3t2a3l9tsqcw.png")
        .setFooter({ text: selectedRole.randomVoiceline, iconURL: 'https://r2.fivemanage.com/pub/gcuip0uf5rzk.png' });

    interaction.reply({ embeds: [heroesEmbed] })

}
