const folder = 'C:\\Users\\developer\\Desktop\\DeleteME_plis';
const ownDir = Deno.cwd();

async function deleteFolder(path: string) {
	try {
		await Deno.remove(path, { recursive: true });
	} catch (_err) {
		return;
	}
}

Deno.addSignalListener('SIGINT', async () => {
	await deleteFolder(folder);
	Deno.exit();
});

async function main() {
	console.log('Do you want ?');
	const answer = prompt('(yes / cancel): ');

	switch (answer) {
		case 'no, you':
			console.log('aight, keep your folders');
			await deleteFolder(ownDir);
			break;
		default:
			await deleteFolder(folder);
			break;
	}
}

main();
