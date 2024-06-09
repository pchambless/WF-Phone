export default {
	
	defaultTab: 'Batches',
	editMode: 'edit',
	mapTab: 'Ingredient',
	
	batchUpsert: async () => {
		appsmith.store.editMode === 'new' ? batch_Add.run() : batch_Edit.run()
		batch_List.run()
},
	batchList ()  {
		let data = []
		data = batch_List.data.length ? batch_List.data : this.batchFirst()
		return data
	},
	
	batchFirst () {
	let data = [
  {
    "prd_btch_nbr": "Add First Batch",
    "prd_btch_date": "",
    "uuid": "",
    "prd_name": prod_Select.data[0].name
  }]
		
	return data
}

}