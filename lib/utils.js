import chalk from 'chalk'

export const downloadTemplate = async (spinner, emitter, { targetDir, projectName }) => {
	try {
		spinner.start('cloning template...')

		await emitter.clone(targetDir)

		spinner.succeed('Project created successfully')
		console.log(chalk.green(`Project ${projectName} created at ${targetDir}`))
		console.log(chalk.blue('To get started:'))
		console.log(chalk.blue(`cd ${projectName}`))
		console.log(chalk.blue('npm install'))
		console.log(chalk.blue('npm run dev'))
	} catch (error) {
		spinner.fail('cloning failed...')
		spinner.fail(chalk.red('Error while cloning template:', error))
	}
}

export const emptyDir = async () => {
	console.log('empty dir...')
}
