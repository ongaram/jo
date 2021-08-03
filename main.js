const colorChange = document.querySelector('.color');
const content = document.querySelectorAll('.content');
const number = document.querySelectorAll('.number');
const title = document.querySelectorAll('.title');
const red = document.querySelectorAll('.red');
const html = document.querySelector('html');

function nightDayHandler(self) {

    if (self.value === 'night') {
        html.style.backgroundImage = 'url("img_night.jpg")';
        html.style.backgroundSize = 'cover';
        self.value = 'day';
        setColor1('white');
        setColor2('white');
        setColor3('rgba(0, 0, 0, 0)');
        setColor4('rgba(0, 0, 0, 0)');
        setColor5('rgba(0, 0, 0, 0)');
        setColor6('white');
        setColor7('rgba(0, 0, 0, 0)');
        setColor8('white');
    } else if (self.value === 'day') {
        html.style.backgroundImage = 'url("img_day.jpg")';
        html.style.backgroundSize = 'cover';
        self.value = 'night';
        setColor1('#2DB400');
        setColor2('rgb(85, 50, 0)');
        setColor3('white');
        setColor4('white');
        setColor5('white');
        setColor6('rgb(248, 166, 72)');
        setColor7('white');
        setColor8('#CD2E57');
    }
}

function setColor1(color1) {

    for (var c1 = 0; c1 < content.length; c1++) {
        content[c1].style.color = color1;
    }
}

function setColor2(color2) {
    
    for (var c2 = 0; c2 < number.length; c2++) {
        number[c2].style.color = color2;
    } 
}

function setColor3(color3) {
    
    for (var c3 = 0; c3 < content.length; c3++) {
        content[c3].style.backgroundColor = color3;
    }
}

function setColor4(color4) {
    
    for (var c4 = 0; c4 < number.length; c4++) {
        number[c4].style.backgroundColor = color4;
    } 
}

function setColor5(color5) {
    
    for (var c5 = 0; c5 < title.length; c5++) {
        title[c5].style.backgroundColor = color5;
    }
}

function setColor6(color6) {
    
    for (var c6 = 0; c6 < title.length; c6++) {
        title[c6].style.color = color6;
    }
}

function setColor7(color7) {
    
    for (var c7 = 0; c7 < red.length; c7++) {
        red[c7].style.backgroundColor = color7;
    }
}

function setColor8(color8) {

    for (var c8 = 0; c8 < red.length; c8++) {
        red[c8].style.color = color8;
    }
}