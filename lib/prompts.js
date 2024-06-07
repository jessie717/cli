import inquirer from 'inquirer'

export const promptGenerator = () => {
	return new Promise(async (resolve, reject) => {
		// frame select
		const frames = await inquirer.prompt([
			{
				type: 'list',
				name: 'frame',
				message: '模板类型:',
				default: 'vue3',
				choices: [
					{ name: 'vue3', value: 'vue3' },
					{ name: 'react', value: 'react' }
				]
			}
		])

		if (frames.frame === 'react') {
			await inquirer.prompt([
				{
					type: 'list',
					message: '请选择 ui 组件库:',
					choices: [{ name: 'ant-design', value: 'ant-design' }],
					name: 'library'
				}
			])
		}
		if (frames.frame === 'vue3') {
			await inquirer.prompt([
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
		}

		// plugins
		const plugins = await inquirer.prompt([
			{
				type: 'checkbox',
				name: 'plugins',
				message: '插件选择',
				choices: [
					{ name: 'babel', value: 'babel' },
					{ name: 'eslint', value: 'eslint' },
					{ name: 'vue-router', value: 'vue-router' }
				]
			}
		])
		resolve({
			...frames,
			...plugins
		})
	})
}
