import { ensureDirSync } from "https://deno.land/std@0.204.0/fs/mod.ts";

async function deleteFolder(path: string) {
	try {
		await Deno.remove(path, { recursive: true });
		console.log(`Folder "${path}" has been deleted.`);
	} catch (err) {
		console.error(`Error deleting folder: ${err}`);
	}
}

async function promptUser(): Promise<string> {
	const buf = new Uint8Array(1024);
	await Deno.stdout.write(
		new TextEncoder().encode('Do you want? ( yes / cancel ): ')
	);
	const n = <number>await Deno.stdin.read(buf);
	return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

async function main() {
	const folder = 'C:\\Users\\developer\\Desktop\\DeleteME_plis';

	const answer = await promptUser();

	switch (answer) {
		case 'yes':
		case 'cancel':
		default:
			ensureDirSync(folder);
			deleteFolder(folder);
			break;
	}
}

main();
