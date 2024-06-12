import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import degit from 'degit'
import ora from 'ora'

import { downloadTemplate, emptyDir } from './utils.js'
import { templateGenerator } from '../prompt/template.js'

const spinner = ora()

const create = async (projectName, options) => {
	console.log('options :>> ', options)
	//
	const cwd = process.cwd()
	const targetDir = path.join(cwd, projectName)
	console.log('targetDir :>> ', targetDir)

	if (fs.existsSync(projectName)) {
		if (!options.force) {
			spinner.warn(chalk.magenta('Project directory already exists'))
			return
		}
		// TODO:
		spinner.info(chalk.yellow('empty dir...'))
		emptyDir()
	}

	const template = await templateGenerator()
	console.log('template :>> ', template)

	const emitter = degit('vitejs/vite/packages/create-vite/template-react-ts', {
		cache: false,
		force: true,
		verbose: true
	})

	downloadTemplate(spinner, emitter, { targetDir, projectName })
}

export { create }
