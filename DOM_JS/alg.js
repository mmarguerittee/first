
document.getElementById('verify').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const M = parseFloat(document.getElementById('M').value);
    const K = parseFloat(document.getElementById('K').value);

    const fits = (
        (a <= M && b <= K) || (a <= K && b <= M) ||
        (a <= M && c <= K) || (a <= K && c <= M) ||
        (b <= M && c <= K) || (b <= K && c <= M)
    );

    document.getElementById('result').value = fits ? 'Коробка пройдёт' : 'Коробка не пройдёт';
});
