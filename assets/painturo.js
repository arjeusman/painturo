// function for copy to clipboard
function copy(data) {
    navigator.clipboard.writeText(data);
    new bootstrap.Modal(document.querySelector("#success")).show();
}

// function for reaction
function react(e) {
    if (e.classList.contains('bi-heart')){
        e.classList.remove('bi-heart')
        e.classList.add('bi-heart-fill')
    } else {
        e.classList.remove('bi-heart-fill')
        e.classList.add('bi-heart')
    }
}

// functions for color picker and mixer

function updateColor() {
    let red = parseInt(document.getElementById('red').value)
    let green = parseInt(document.getElementById('green').value)
    let blue = parseInt(document.getElementById('blue').value)
    let alpha = parseFloat(document.getElementById('alpha').value)
    let output = document.getElementById('color')
    let rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')'
    let rgba = 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha.toFixed(1) + ')'
    output.style.backgroundColor = rgba
    document.getElementById('redLabel').innerHTML = red
    document.getElementById('greenLabel').innerHTML = green
    document.getElementById('blueLabel').innerHTML = blue
    document.getElementById('alphaLabel').innerHTML = alpha.toFixed(1);
    document.getElementById('rgbCode').innerHTML = rgb
    document.getElementById('rgbaCode').innerHTML = rgba
    document.getElementById('hexCode').innerHTML = RGBtoHex(red, green, blue)
    //update picker color
    document.getElementById('picker').value = RGBtoHex(red, green, blue)
}

const colorToHex = (color) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

const RGBtoHex = (red, green, blue) => {
    return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
}

// color picker
function hexTorgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

function updateFromPicker(hex) {
    let color = hexTorgb(hex)
    let rgb = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')'
    let rgba = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 1.0)'
    document.getElementById('color').style.backgroundColor = rgba
    //update rgba range
    document.getElementById('red').value = color[0]
    document.getElementById('green').value = color[1]
    document.getElementById('blue').value = color[2]
    document.getElementById('alpha').value = 1.0
    //update color codes
    document.getElementById('rgbaCode').innerHTML = rgba
    document.getElementById('rgbCode').innerHTML = rgb
    document.getElementById('hexCode').innerHTML = hex
}