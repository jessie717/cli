import download from 'download-git-repo'

export const downloadTemplate = (targetDir) => {
	download('vitejs/vite#main/packages/create-vite/template-react', targetDir)
}
