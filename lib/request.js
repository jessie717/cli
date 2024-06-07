export const fetchRepos = async () => {
  const results = await fetch(
    'https://api.github.com/repos/rippi-cli-template/react/branches',
    {
      method: 'GET',
    }
  )
	console.log('results :>> ', results.json());
	return results
}
