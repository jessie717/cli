import fs from 'fs'
import path from 'path'
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
/**
 * 清空 target dir
 * @param {*} spinner
 * @param {*} targetDir
 */
export const emptyDir = async (spinner, targetDir) => {
	if (fs.existsSync(targetDir)) {
		fs.readdirSync(targetDir).forEach((file) => {
			const filepath = path.resolve(targetDir, file)
			const stat = fs.statSync(filepath)
			if (stat.isDirectory()) {
				emptyDir(spinner, filepath)
			} else {
				fs.unlinkSync(filepath)
			}
		})
		fs.rmdirSync(targetDir)
	} else {
		fs.rmdirSync(targetDir)
	}
	spinner.succeed(chalk.magenta(`${targetDir} empty successful`))
}
