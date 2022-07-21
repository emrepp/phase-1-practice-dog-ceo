console.log('%c HI', 'color: firebrick')
const container = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function getImages(){
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
    renderImgs(imgsArray)
})}
 
        function createImgElement(imgs){
        return imgs.map((img) => {
            let i = `<img src=${img}>`
            return i
        })
       
    }
    function renderImgs(imgsArray){
        imgsArray.forEach(element =>{
            renderImgs(element)
        })}

    
    function renderImg(element){
        container.innerHTML += element
    }

    getImages()


