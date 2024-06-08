export default {
editModeRun: async () => {
	const mode = jsnProdType.formData.editMode;
	switch(mode) {
		case 'Add':
			await prodType_Add.run();
			break;
		case 'Edit':
			await prodType_Edit.run();
			break;
		case 'Delete':
			await prodType_Delete.run();
			break;
		default:
			console.log("Invalid mode");
		}
	await prodType_dd.run()
	await jsTabs.resetTabs()
},
async editMode  () {
	const mode = jsnProdType.formData.editMode;
	switch(mode) {
		case 'Add':
			await jsnProdType.setSourceData('');
			break;
		case 'Edit':
		case 'Delete':
			await jsnProdType.setSourceData(prodType_select.data[0]);
			break;
		case 'Back':
			await jsTabs.resetTabs();
			break;
		default:
			console.log("Invalid mode");
		}
}
}