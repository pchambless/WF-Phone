export default {
	spIngrBtch_listing: (actIndc) => {
		storeValue('active', actIndc);
		showAlert(actIndc === 'Y' ? 'Active' :  'Deleted');
		ingrBtch_List.run();
},
	upsertIngrBtch:  () => {
		const queries = {
		"insert": ingrBtch_Add,
		"update": ingrBtch_Edit
		};
		return queries[tbl_IngrBtch_list.triggeredRow.act]?.run()
		.then (() => ingrBtch_List.run())
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
