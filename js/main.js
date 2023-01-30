let sliderItems = Array.from(document.querySelectorAll('.slider-container img'))
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let sliderNum = document.getElementById('slider-num');
let indicators = document.getElementById('indicators')
let sliderCount = sliderItems.length;
let count = 1;

//Create ul Element

let ulElement = document.createElement('ul');
ulElement.setAttribute('id' , 'ul-element')


for (let i = 1; i<=sliderCount; i++) {
    var liElments = document.createElement('li');
    liElments.innerHTML = i;
    liElments.setAttribute('data-index' , i)
    ulElement.appendChild(liElments);
}

indicators.appendChild(ulElement);

let liArr = Array.from(document.querySelectorAll('#ul-element li'))


theMainFun()



for(let i = 0; i<liArr.length; i++){
    liArr[i].onclick = function(){
        count = parseInt(this.getAttribute('data-index'))
        theMainFun()
    }
}



//Clicks Function


nextButton.onclick = nextClick;
prevButton.onclick = prevClick;



function nextClick() {

    if(nextButton.classList.contains('disabled')){
    }else{
        count++
    theMainFun()
    }

}

function prevClick() {
    if(prevButton.classList.contains('disabled')){
    }else{
        count--
    theMainFun()
    }
}


//The Main Function


function theMainFun(){

    sliderNum.innerHTML = "Slider # " + count;
    
    removeActive()

    sliderItems[count-1].classList.add('active');
    liArr[count-1].classList.add('active');

    if(count == 1){
        prevButton.classList.add('disabled')
    }else{
        prevButton.classList.remove('disabled')
    
    }
    
    if(count == sliderCount){
        nextButton.classList.add('disabled')
    }else{
        nextButton.classList.remove('disabled')
    }

}



//Remove Active


function removeActive() {
    sliderItems.forEach(function(img){
        img.classList.remove('active')
    })

    liArr.forEach(function(li){
        li.classList.remove('active')
    })
}


