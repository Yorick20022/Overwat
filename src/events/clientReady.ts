import { Client, EmbedBuilder, Events } from 'discord.js';

export const name = Events.ClientReady;
export const once = true;
export async function execute(client: Client) {
	console.log(`Ready!\nLogged in as ${client.user!.tag}!`);
	client.user!.setPresence({ activities: [{ name: 'overwat' }] });
}