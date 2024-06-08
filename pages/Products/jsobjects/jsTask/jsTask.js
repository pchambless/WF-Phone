export default {
editModeRun: async () => {
	const mode = jsnTask.formData.editMode;
	switch(mode) {
		case 'Add':
			await task_Add.run();
			break;
		case 'Edit':
			await task_Edit.run();
			break;
		case 'Delete':
			await task_Delete.run();
			break;
		default:
			console.log("Invalid mode");
		}
	await task_List.run()
	jsTabs.resetTabs()
},
async editMode  () {
	const mode = jsnTask.formData.editMode;
	switch(mode) {
		case 'Add':
			await jsnTask.setSourceData('');
			break;
		case 'Edit':
		case 'Delete':
			await jsnTask.setSourceData(tbl_Tasks.selectedRow);
			break;
		case 'Back':
			await jsTabs.resetTabs();
			break;
		default:
			console.log("Invalid mode");
		}
}
}
