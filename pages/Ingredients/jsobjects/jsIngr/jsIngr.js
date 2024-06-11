export default {
editModeRun: async (mode) => {
	switch(mode) {
		case 'Add':
			await ingr_Add.run();
		case 'Edit':
			await ingr_Edit.run();
		case 'Delete':
			await ingr_Delete.run();
		default:
			console.log("Invalid mode");
		}
	await ingr_List.run()
}
	
}
