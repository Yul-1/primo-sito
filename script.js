document.addEventListener('DOMContentLoaded', function() {
console.log('Sito caricato!');
const h1 = document.querySelector('h1');
h1.addEventListener('click', function() {
alert('Hai cliccato il titolo!');
});
});
