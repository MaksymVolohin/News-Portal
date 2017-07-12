function id(a) {
    return document.getElementById(a);
}

function sel(a) {
    return document.querySelector(a);
}
var firstSlide = sel('.slide-first');
var secondSlide = sel('.slide-second');
var thirdSlide = sel('.slide-third');
var sliderMass = [firstSlide, secondSlide, thirdSlide];
var togle = 0;
id('right').addEventListener('click', function () {
    for (togle = togle; togle < sliderMass.length;) {
        if ((togle+1) == sliderMass.length) {
            togle = 0;
            sliderMass[togle].style.display = 'flex'
            sliderMass[sliderMass.length-1].style.display = 'none';
            break;
        }
        else {
            if (sliderMass[togle].style.display = 'flex') {
                sliderMass[togle].style.display = 'none';
                sliderMass[togle + 1].style.display = 'flex';
                togle++;
                break;
            }
        }
    }
})
id('left').addEventListener('click', function () {
    for (togle = togle; togle <= sliderMass.length;) {
        if (togle == 0) {
            sliderMass[togle].style.display = 'none';
            togle = sliderMass.length-1;
            sliderMass[togle].style.display = 'flex';
            break;
        }
        else {
            if (sliderMass[togle].style.display = 'flex') {
                sliderMass[togle].style.display = 'none';
                sliderMass[togle - 1].style.display = 'flex';
                togle--;
                break;
            }
        }
    }
})