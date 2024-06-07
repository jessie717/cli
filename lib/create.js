import path from 'path'
import fs from 'fs'
import chalk from 'chalk'
import download from 'download-git-repo'

import { loading } from './utils.js'
// import { fetchRepos } from './request.js'
import { downloadTemplate } from './download.js'
import { templateGenerator } from '../prompt/template.js'

const create = async (projectName) => {
	//
	const cwd = process.cwd()
	const targetDir = path.join(cwd, projectName)
	console.log('targetDir :>> ', targetDir)

	if (fs.existsSync(projectName)) {
		console.warn('Project directory already exists')
		return
	}

	const template = await templateGenerator()
	console.log('template :>> ', template)

	download('vitejs/vite#main/packages/create-vite/template-react', targetDir, {}, (err) => {
		console.log('err :>> ', err)
	})

	//
	// const branches = await loading(
	// 	(dir) => download('vitejs/vite#main/packages/create-vite/template-react', dir),
	// 	'waiting for fetch resources...',
	// 	targetDir
	// )
	// console.log('branches :>> ', branches)

	console.log(chalk.green('Project created successfully'))
}

export { create }
