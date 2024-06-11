export default {
async select () {
	await storeValue('ingrTypeID',tbl_Recipe.selectedRow.ingr_type_id)
	await storeValue('editRcpe','edit')
	await ingr_dd.run()
},
async editModeRun (editMode)  {
	switch(editMode) {
		case 'Add':
			await ingr_Add.run();
			break;
		case 'Edit':
			await ingr_Edit.run();
			break;
		case 'Delete':
			await ingr_Delete.run();
			break;
		case 'Back':
			await jsTabs.resetTabs.data;
			break;
		default:
			console.log("Invalid mode");
		}
	await ingr_List.run()
	await jsTabs.resetTabs()	
},
async editMode  (mode) {
	switch(mode) {
		case 'Add':
			await jsnRecipe.setSourceData('');
			break;
		case 'Edit':
		case 'Delete':
			await jsnRecipe.setSourceData(tbl_Recipe.selectedRow);
			await ingr_dd.run()
			break;
		case 'Back':
			await jsTabs.resetTabs();
			break;
		default:
			console.log("Invalid mode");
		}
}
}