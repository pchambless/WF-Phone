export default {
	async addVendor () {
		await sp_Vendor_insert.run()
		await dd_Vendor.run()
		await storeValue('addVndrBrnd','')
	},
	async addBrand () {
		await sp_Brand_insert.run()
		await dd_Brand.run()
		await storeValue('addVndrBrnd','')
	}
}