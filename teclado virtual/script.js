const keys = document.querySelectorAll('.btn');
const ta = document.querySelector('textarea');
var msg = document.getElementById('mensagem');

const delete_btn = document.querySelector('.delete');
const shift_btn = document.querySelector('.shift');
const space_btn = document.querySelector('.space');

let chars = []

keys.forEach(btn => {
    btn.addEventListener('click', () => {
        ta.value += btn.innerText
        chars = ta.value.split('')
        console.log(chars);
    })
})
delete_btn.addEventListener('click', () => {
    chars.pop()
    ta.value = chars.join('')
})
space_btn.addEventListener('click', () => {
    chars.push(' ')
    ta.value = chars.join('')
})

shift_btn.addEventListener('click', () => {
    keys.forEach(btn => {
        btn.classList.toggle('upper')
    })
})
function salvarPalavra() {
    var palavra = ta.value;
    alert('Palavra Salva: ' + palavra);
}