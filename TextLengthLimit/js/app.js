/**
 * Text Length Checker
 * @author MD Jihad Hossain
 * @date 14-04-2022
 */

const textBox = document.getElementById("text-box");
const textLen = document.getElementById("text-length");

textBox.addEventListener('input', (txtLen) => {
    txtLen = textBox.value.length;
    textLen.innerText = `${txtLen} / 100`
    if(txtLen >= 100) {
        textBox.style.border = '2px solid #d63031'
        textLen.style.color = '#d63031'
    }else {
        textBox.style.border = 'none'
        textLen.style.color = '#636e72'
    }
})

