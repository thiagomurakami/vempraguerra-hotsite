const DELIMITER = '	'

const getDataFromSheets = async (url, setState, dataTransformer) => {
  try {
    const response = await fetch(url)
    const stringData = await response.text()
    const arrayData = stringData.split('\n').slice(1).map((val) => val.split(DELIMITER))
    setState(dataTransformer(arrayData))
  } catch (e) {
    console.error(e)
  }
}

export default getDataFromSheets
