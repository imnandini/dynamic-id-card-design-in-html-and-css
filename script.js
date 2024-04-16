function changeSVGColor(hueRotation) {
    var frontSVG = document.querySelector('.background-svg');
    var backSVG = document.querySelector('.background-svg-back');

    frontSVG.style.filter = 'hue-rotate(' + hueRotation + 'deg)';
    backSVG.style.filter = 'hue-rotate(' + hueRotation + 'deg)';
}

// Example usage:
changeSVGColor(60); // Change the color to 60 degrees hue
