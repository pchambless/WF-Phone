export default {
	ingr_Map: async () => {
		await prodIngrMap_Add.run();
		await batch_Choices.run();
		await batch_Mapped.run();
		await prodIngrMap_List.run();
  },
	ingr_UnMap: async () => {
		await prodIngrMap_Delete.run();
		await batch_Choices.run();
		await batch_Mapped.run();
		await prodIngrMap_List.run()
  },
	async mapping () {
		await storeValue('ProdUUID',tbl_Batch.triggeredRow.uuid)
		storeValue('prodBatch',tbl_Batch.triggeredRow.prd_btch_nbr)
		await rcpe_List.run()
		await task_List.run()
		showModal('mdl_Mapping')
	}
}