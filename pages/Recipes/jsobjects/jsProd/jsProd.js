export default {
	
	defaultTab: 'Batches',
	editMode: 'edit',
	mapTab: 'Ingredient',
	
	batchUpsert: async () => {
		appsmith.store.editMode === 'new' ? sp_Batch_insert.run() : sp_Batch_update.run()
		f_Batch.run()
},
	batchList ()  {
		let data = []
		data = f_Batch.data.length ? f_Batch.data : this.batchFirst()
		return data
	},
	
	batchFirst () {
	let data = [
  {
    "prd_btch_nbr": "Add First Batch",
    "prd_btch_date": "",
    "uuid": "",
    "prd_name": f_Prod_select.data[0].name
  }]
		
	return data
}

}