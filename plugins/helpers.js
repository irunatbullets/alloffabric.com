const fileName = (string) => string.replace('/', '')
const lowerCase = (string) => string.toLowerCase().trim()
const imageSrc = (string) => require(`~/assets/uploads/${fileName(string)}`)



export default ({ app }, inject) => {
  inject('fileName', fileName)
  inject('lowerCase', lowerCase)
  inject(`imageSrc`, imageSrc)
}
