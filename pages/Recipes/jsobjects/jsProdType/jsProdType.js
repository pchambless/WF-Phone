export default {
async select () {
	await prod_dd.run()
	await jsTabs.resetTabs()
}
}