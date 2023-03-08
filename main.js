
let pageViews = document.querySelector('.page-views');

let price = document.querySelector(".price");

let sliderRange = document.querySelector(".range");

let toggleSlide = document.querySelector(".billing");

let pageViewsList = [ '10K', '50K', '100K', '500K', '1M'];

let MonthPriceList = [ 8, 12, 16, 24, 36];

let yearly = false;

// adding sliderRange funciton
sliderRange.addEventListener('input', function(){
    updateOption();

    // connecting the slider with pageviews
    pageViews.innerHTML = pageViewsList[sliderRange.value];

    // changeing the slider color with its value
    // first store the changing value * percentage
    let value = this.value * 25;
    // second adding the stored value to the backgound color
    this.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`
});

// adding toggle slider function

toggleSlide.addEventListener('change', function(){
    if(yearly == false){
        yearly = true;
    }else{
        yearly = false;
    }
    updateOption()
});

// updateOption function

function updateOption(){
    if(yearly){
        price.innerHTML = MonthPriceList[sliderRange.value] * .75
        
    }else{
        price.innerHTML = MonthPriceList[sliderRange.value]
    }
}