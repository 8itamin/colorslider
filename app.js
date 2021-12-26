const upbtn = document.querySelector('.up-button')
const downbtn = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')

const slideCount = mainSlide.querySelectorAll('div').length
console.log(slideCount)

const container = document.querySelector('.container')

sidebar.style.top = `-${(slideCount-1) * 100}vh`

let activeSlideIndex = 0
    
upbtn.addEventListener('click', () => {
changeSlide('up')
})


downbtn.addEventListener('click', () => {
changeSlide('down')
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideCount) {
            activeSlideIndex = 0
        }
    }
    if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideCount - 1
            console.log(activeSlideIndex)
        }
    }
    const height = container.clientHeight
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex*
        height}px)`
    sidebar.style.transform = `translateY( ${activeSlideIndex*
height}px)`
}

