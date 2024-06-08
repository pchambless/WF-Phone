export default {
editModeRun: async () => {
	const mode = jsnProd.formData.editMode;
	switch(mode) {
		case 'Add':
			await prod_Add.run();
		case 'Edit':
			await prod_Edit.run();
		case 'Delete':
			await prod_Delete.run();
		default:
			console.log("Invalid mode");
		}
	await prod_List.run()
}
}