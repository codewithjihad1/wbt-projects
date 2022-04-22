
const text = document.querySelectorAll('.text-box p');
const showText = document.querySelectorAll('.see-more');

for(txt of text) {
    const textlength = txt.innerText.length;
    if(textlength >= 450) {
        txt.childNodes[1].classList.add('show')
    }else {
        txt.childNodes[1].classList.remove('show')
    }
}

// show & hide text
for(item of showText) {
    item.addEventListener('click', function() {
        this.parentElement.classList.toggle('showText')
        if(this.parentElement.className === 'showText') {
            this.innerText = "see less..."
        }else {
            this.innerText = "see more..."
        }
    })
}

