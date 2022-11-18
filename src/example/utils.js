function createImg(width, height) {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = `hsl(${Math.floor(Math.random() * 360)}deg,20%,50%)`;
    ctx.font = `${width / 16}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('wortal-sdk-est', width / 2, height / 2);
    return canvas.toDataURL();
}

let purchaseToken = "";
