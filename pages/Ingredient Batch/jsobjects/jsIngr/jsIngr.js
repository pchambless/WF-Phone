export default {
	defaultTab: 'Batches',
	editMode: 'edit',
	
	batchUpsert: async () => {
	appsmith.store.editMode === 'edit' ? ingrBtch_Edit.run() : ingrBtch_Add.run()
	appsmith.store.editMode === 'edit' ? showAlert(ingrBtch_Edit.data) : 	showAlert(ingrBtch_Add.data)
	
	await ingrBtch_List.run();
	this.defaultTab = 'Batches';
},
	batchList ()  {
		let data = []
		data = ingrBtch_List.data.length ? ingrBtch_List.data : this.batchFirst()
		return data
	},
	
	batchFirst () {
	let data = [
  {
    "Date": "",
		"Batch": "Add First Batch",
    "uuid": ""
  }]
		
	return data
}
	
}
