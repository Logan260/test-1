const imageFile = document.querySelector('#imageFile');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');
const canvas = document.querySelector('#gif');

let image;

imageFile.addEventListener('change', () => {
    const imageUrl = URL.createObjectURL(imageFile.files[0]);
   image = new Image();
   image.src = imageUrl;
   image.addEventListener('load', () => {
    updateGifCanvas(canvas, image, topText.value, bottomText.value);
}, { once: true })
})
function updateGifCanvas(canvas, image, topText, bottomText){
   const ctx = canvas.getContext('2d');
   const width = image.width;
   const height = image.height;
   const fontSize = Math.floor(width/ 10);
   const  yOffSet = height / 9;
   canvas.width = width;
   canvas.height = height;
   ctx.drawImage(image, 0, 0);
   ctx.strokeStyle = 'black';
   ctx.lineWidth = Math.floor(fontSize / 4);
   ctx.fillStyle = 'white';
   ctx.textAllign = 'center';
   ctx.lineJoin = 'round';
   ctx.font = `${fontSize}px sans-serif`;

   ctx.textBaseLine = 'top';
   ctx.strokeText(topText, width / 2, yOffSet);
   ctx.fillText(topText, width / 2, yOffSet);

   ctx.textBaseLine = 'bottom';
   ctx.strokeText(bottomText, width / 2, height - yOffSet);
   ctx.fillText(bottomText, width / 2, height - yOffSet);

}
