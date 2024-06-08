export default {
	spIngrBtch_listing: (actIndc) => {
		storeValue('active', actIndc);
		showAlert(actIndc === 'Y' ? 'Active' :  'Deleted');
		f_Batch.run();
},
	upsertIngrBtch:  () => {
		const queries = {
		"insert": sp_Batch_insert,
		"update": sp_Batch_update
		};
		return queries[tbl_IngrBtch_list.triggeredRow.act]?.run()
		.then (() => f_Batch.run())
		.catch (() => showAlert(queries[tbl_IngrBtch_list.triggeredRow.act]?.data))
},
	newBatch: async () => {
		storeValue('tabIngr','Add/Edit Batch')
		txtLastBatch.setVisibility(true)
		BtchNbr.setValue('')
		LotNbr.setValue('')
		PurchDate.setValue('')
		BestByDate.setValue('')
		Vendor.setSelectedOption('')
		Brand.setSelectedOption('')
		PurchQty.setValue(0)
		PurchPrice.setValue(0)
		UnitQty.setValue(1)
		Measure.setSelectedOption('')
	}
}
