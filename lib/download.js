import download from 'download-git-repo'

export const downloadTemplate = (url, targetDir) => {
	return new Promise((resolve, reject) => {
		download(`direct:${url}`, targetDir, { clone: true }, (err) => {
			if (err) {
				return reject(err)
			}
			resolve(11)
		})
	})
}
