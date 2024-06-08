export default {
	rowSelect: async () => {
		await storeValue('IngrTypeIdx',tbl_IngrType_list.triggeredRowIndex);
		await f_Ingr_list.run();
  },
	goToClick: async () => {
		await f_Ingr_list.run();
		await storeValue('tab_IngrType',tbl_IngrType_list.triggeredRow.name);
  },
	trigToSelect:  () => {
		storeValue('IngrTypeIdx',tbl_IngrType_list.triggeredRowIndex);
   },
	spIngrType_listing: (actIndc) => {
		storeValue('active', actIndc);
		showAlert(actIndc === 'Y' ? 'Active' :  'Deleted');
		dd_IngrType.run();
},
	upsertIngrType:  () => {
		const queries = {
		"insert": spIngrType_insert,
		"update": spIngrType_update
		};
		return queries[tbl_IngrType_list.triggeredRow.act]?.run()
		.then (() => dd_IngrType.run())
		.catch (() => showAlert(queries[tbl_IngrType_list.triggeredRow.act]?.data))
},
	initActive: () => {
		storeValue('active','Y')
}
}
