export default {
	createIngrList: () => {
		let ingredients = cw_Ingredients.data
    let html = ""

    for (const ing in ingredients) {
        html += `<tr>\n`;
        html += `\t<td style="text-align: center; border-bottom: 1px solid;">${JSON.stringify(ingredients[ing].ingr_ordr)}</td>\n`;
        html += `\t<td style="text-align: left; border-bottom: 1px solid;">${ingredients[ing].ingr_name}</td>\n`;
				html += `\t<td style="text-align: left; border-bottom: 1px solid;">${ingredients[ing].ingrMaps}</td>\n`;
        html += `</tr>\n`;
    }
    return html
},
	createTaskList: (tasks) => {
    let html = ""

    for (const tsk in tasks) {
        html += `<tr>\n`;
        html += `\t<td style="text-align: center; border-bottom: 1px solid;">${JSON.stringify(tasks[tsk].Ordr)}</td>\n`;
        html += `\t<td style="text-align: left; border-bottom: 1px solid;">${tasks[tsk].Task}</td>\n`;
				html += `\t<td style="text-align: left; border-bottom: 1px solid;">${tasks[tsk].recorded}</td>\n`;
				html += `\t<td style="text-align: left; border-bottom: 1px solid;">${tasks[tsk].taskWrkrs}</td>\n`;
        html += `</tr>\n`;
    }
    return html
}
}