const fileName = (string) => string.replace('uploads/', '')
const lowerCase = (string) => string.toLowerCase().trim()

export default ({ app }, inject) => {
  inject('fileName', fileName)
  inject('lowerCase', lowerCase)
}
