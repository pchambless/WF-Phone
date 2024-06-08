export default {
editModeRun: async () => {
	const mode = jsnProd.formData.editMode;
	switch(mode) {
		case 'Add':
			await prod_Add.run();
			break;
		case 'Edit':
			await prod_Edit.run();
			break;
		case 'Delete':
			await prod_Delete.run();
			break;
		case 'Back':
			await jsTabs.resetTabs.data;
			break;
		default:
			console.log("Invalid mode");
		}
	await prod_List.run()
	await jsTabs.resetTabs()	
},
async editMode  () {
	const mode = jsnProd.formData.editMode;
	switch(mode) {
		case 'Add':
			await jsnProd.setSourceData('');
			break;
		case 'Edit':
		case 'Delete':
			await jsnProd.setSourceData(tbl_Prod.selectedRow);
			break;
		case 'Back':
			await jsTabs.resetTabs();
			break;
		default:
			console.log("Invalid mode");
		}
}
}