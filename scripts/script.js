window.addEventListener("load", ()=> {

    var redColor = document.querySelector("#color-red")
    var greenColor = document.querySelector("#color-green")
    var blueColor = document.querySelector("#color-blue")
    var opacity = document.querySelector("#opacity")

    var redText = document.querySelector(".text-color-red")
    var greenText = document.querySelector(".text-color-green")
    var blueText = document.querySelector(".text-color-blue")
    var opacityText = document.querySelector(".text-opacity")
    
    var colorBackground = document.querySelector(".card-background-color")
    var textBackground = document.querySelector(".card-background-text")
    var textBackgroundHex = document.querySelector("#hex")


    redColor.addEventListener("change", eventColorChange);
    greenColor.addEventListener("change", eventColorChange);
    blueColor.addEventListener("change", eventColorChange);
    opacity.addEventListener("change", eventColorChange);
    


    function eventColorChange(){
        redText.value = redColor.value
        greenText.value = greenColor.value
        blueText.value = blueColor.value
        opacityText.value = opacity.value
        
        var rgba = `rgba(${redColor.value},  ${greenColor.value}, ${blueColor.value}, ${opacity.value/100})`;


        colorBackground.style.backgroundColor = rgba;

        textBackground.textContent = rgba

        textBackgroundHex.textContent = rgba2hex(rgba)
    }

    function rgba2hex(ori) {

        var a, isPercent,
        rgb = ori.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s]+)?/i),
        alfa = (rgb && rgb[4] || "").trim(),
        hex = rgb ?
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) + 
        (rgb[3] | 1 << 8).toString(16).slice(1) : ori;

        if (alfa !== "") {
            a = alfa;
        } else {
            a = 01;
        }

        a = ((a * 255) | 1 << 8).toString(16).slice(1)
        hex = `#${hex}${a}`;

        return hex;
    }
})