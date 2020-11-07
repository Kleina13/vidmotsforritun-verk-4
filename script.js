const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,    // confidence threshold for predictions.
};

navigator.getUserMedia = 
    navigator.getUserMedia || 
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

const video   = document.getElementById('video'); 
const canvas  = document.getElementById('canvas');
const context = canvas.getContext('2d');
let model;

function runDetection() {
    model.detect(video)
        .then(predictions => { 
            console.log(predictions);
            model.renderPredictions(predictions, canvas, context, video);
        });
}

handTrack.startVideo(video)
    .then(status => {
        if (status) { 
            navigator.getUserMedia(
                { video: {} }, 
                stream => { 
                    video.srcObject = stream;
                    setInterval(runDetection, 1000);
                },
                err => console.log(err)
            );
        }
    });


handTrack.load(modelParams)
    .then(load_model => { model = load_model });