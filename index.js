const mainEL = document.getElementById("main-content");
const colorSchemeButton =document.getElementById("button");
colorSchemeButton.addEventListener('click', function(e) {
    e.preventDefault();
        fetchColorScheme()

   
})

function fetchColorScheme() {

    const inputColor = document.getElementById("input");
    const oneHex = inputColor.value.slice(1);
  
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${oneHex}`)
    .then(response => response.json())
    .then(data => {
        mainEL.innerHTML = '';

        for(let color of data.colors) {
            console.log(color)
            const hexValue = color.hex.value
            const nameValue = color.name.value;
            const div = document.createElement('div');
            div.classList.add('color-list')
            div.style.backgroundColor = hexValue
            div.style.height ='500px'
            div.innerText = `${nameValue}`

           
            

            mainEL.appendChild(div)
       

   
        }
    })
}
