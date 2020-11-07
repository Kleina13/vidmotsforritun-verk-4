navigator.getUserMedia = 
    navigator.getUserMedia || 
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

const img = document.getElementById('img'); 
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Load the model.
handTrack.load()
    .then(model => {
        // detect objects in the image.
        model.detect(img)
            .then(predictions => { console.log('Predictions: ', predictions); });
});