

const mainEL = document.getElementById("main-content");
const colorSchemeButton =document.getElementById("button");
const hexValuesEl = document.getElementById('hex-value');

colorSchemeButton.addEventListener('click', function(e) {
    e.preventDefault()
    fetchColorScheme()
})

function fetchColorScheme() {
    const inputColor = document.getElementById("input");
    const oneHex = inputColor.value.slice(1);
    const schemeMode = document.getElementById('mode-select');
    const mode = schemeMode.value;
  
    fetch(`https://www.thecolorapi.com/scheme?hex=${oneHex}&mode=${mode}`)
    .then(response => response.json())
    .then(data => {
        mainEL.innerHTML = '';
        hexValuesEl.innerHTML = '';

        for(let color of data.colors) {
            const hexValue = color.hex.value;
            const nameValue = color.name.value;
            const div1 = document.createElement('div');
            div1.classList.add('color-list');
            div1.style.backgroundColor = hexValue;
            div1.style.height ='500px';
            div1.innerText = `${nameValue}`;
            mainEL.appendChild(div1);

            const div2 = document.createElement('div');
            div2.innerText = `${hexValue}`;
            hexValuesEl.appendChild(div2);
        }
    })
}
