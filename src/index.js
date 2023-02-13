import { Header } from './app/header'
import { Footer } from './app/footer'
import './styles/scss/main.scss'
import catGif from './assets/images/cat.gif'

const header = new Header()
const firstHeading = header.getFirstHeading()
console.log(firstHeading)

console.log('coucou')
const footer = new Footer()
const footerText = footer.getFooterText()
console.log(footerText)

document.getElementById('cat-gif').setAttribute('src', catGif)
