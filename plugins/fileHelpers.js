const fileName = (string) => string.replace('/', '')

export default ({ app }, inject) => {
  inject('fileName', fileName)
}
