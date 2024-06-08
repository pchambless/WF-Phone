export default {
	ingr_Map: async () => {
		await sp_IngrMap_insert.run();
		await f_BatchChoices.run();
		await f_BatchMapped.run();
		await f_ProdIngrMap_list.run();
  },
	ingr_UnMap: async () => {
		await spProdIngrMap_delete.run();
		await f_BatchChoices.run();
		await f_BatchMapped.run();
		await f_ProdIngrMap_list.run()
  }
}