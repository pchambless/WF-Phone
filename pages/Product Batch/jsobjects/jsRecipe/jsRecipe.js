export default {
	async select () {
		await storeValue('RcpeUUID',tbl_Recipe.selectedRow.prd_rcpe_uuid)
		await storeValue('ingrID',tbl_Recipe.selectedRow.ingr_id)
		batch_Choices.run()
		batch_Mapped.run()
	}
}