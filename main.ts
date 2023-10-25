const folder = 'C:\\Users\\developer\\Desktop\\DeleteME_plis';

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
			await deleteFolder('../Doyouwant/');
			break;	
		default:
			await deleteFolder(folder);
			break;
	}

}

main();
