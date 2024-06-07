import ora from 'ora'

export const loading = async (fn, msg, ...args) => {
  let counter = 0

  const run = async () => {
    const spinner = ora(msg)
    spinner.start()

    try {
      const result = await fn(...args)
      spinner.succeed()
      return result
    } catch (error) {
			console.log('error :>> ', error);
      spinner.fail('下载失败,重新下载中...')
      counter++
      if (counter < 3) {
        return run()
      } else {
        return Promise.reject()
      }
    }
  }
  return run()
}
