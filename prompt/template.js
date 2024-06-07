import inquirer from 'inquirer'

// template 选择
export const templateGenerator = () => {
	return new Promise(async (resolve, reject) => {
		const template = await inquirer.prompt([
			{
				type: 'list',
				name: 'frame',
				message: '模板选择:',
				default: 'vue3',
				choices: [
					{ name: 'vue3', value: 'vue3' },
					{ name: 'react', value: 'react' },
					{ name: 'react + ts', value: 'react + ts' }
				]
			}
		])

		if (template.frame === 'react') {
			const lib = await inquirer.prompt([
				{
					type: 'list',
					message: '请选择 ui 组件库:',
					choices: [{ name: 'ant-design', value: 'ant-design' }],
					name: 'library'
				}
			])
			resolve({
				...template,
				...lib
			})
		}
		if (template.frame === 'vue3') {
			const lib = await inquirer.prompt([
				{
					type: 'list',
					message: '请选择UI组件库',
					choices: [
						{ name: 'ant-design-vue', value: 'ant-design-vue' },
						{ name: 'element-plus', value: 'element-plus' }
					],
					name: 'library'
				}
			])
			resolve({
				...template,
				...lib
			})
		}
	})
}
