#! /usr/bin/env node

import { Command } from 'commander'
import chalk from 'chalk'

import { create } from '../lib/create.js'
// import pkg from '../package.json' assert { type: 'json' }

const program = new Command()

program
	.name('cowin-cli')
	.description('cowin admin cli')
	.version(`cowin-cli 1.0.0`)
	// .version(`cowin-cli ${pkg.version}`)
	.usage('<command> [options]')

program
	.command('create <project-name>')
	.description('create a new project')
	.option('-f, --force', '是否强制覆盖已有项目')
	.action((name, options) => {
		console.log(chalk.green('项目名称: '), name)
		console.log(chalk.green('options: '), options)
		create(name, options)
	})

// console.log('process argv :>> ', process.argv);
program.parse(process.argv)

