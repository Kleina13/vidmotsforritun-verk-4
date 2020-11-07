// Notice there is no 'import' statement. 'handTrack' and 'tf' is
// available on the index-page because of the script tag above.

const img = document.getElementById('img'); 
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

// Load the model.
handTrack.load().then(model => {
    // detect objects in the image.
    model.detect(img).then(predictions => {
    console.log('Predictions: ', predictions); 
    });
});