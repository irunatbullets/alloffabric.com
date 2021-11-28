const fileName = (string) => string.replace('/', '')
const lowerCase = (string) => string.toLowerCase().trim()
const imageSrc = (string) => require(`~/assets/uploads/${string}`)



export default ({ app }, inject) => {
  inject('fileName', fileName)
  inject('lowerCase', lowerCase)
  inject(`imageSrc`, imageSrc)
}
