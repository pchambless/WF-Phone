export default {
	defaultTab: 'Batches',
	editMode: 'edit',
	
	batchUpsert: async () => {
	appsmith.store.editMode === 'edit' ? sp_Batch_update.run() : sp_Batch_insert.run()
	appsmith.store.editMode === 'edit' ? showAlert(sp_Batch_update.data) : 	showAlert(sp_Batch_insert.data)
	
	await f_Batch.run();
	this.defaultTab = 'Batches';
},
	batchList ()  {
		let data = []
		data = f_Batch.data.length ? f_Batch.data : this.batchFirst()
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
