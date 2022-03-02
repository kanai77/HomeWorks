let count = 0

const updateCount = () => {
    const counter = document.getElementById('count')
    counter.innerText = count
}
updateCount()

const plusCount = () => {
    count++ ;
    updateCount()
}
const minusCount = () => {
    count-- ;
    updateCount()
}