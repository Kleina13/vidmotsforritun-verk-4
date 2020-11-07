// paramaters
const modelParams = {
    flipHorizontal: true,   // flip e.g for video 
    imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
    maxNumBoxes: 20,        // maximum number of boxes to detect
    iouThreshold: 0.5,      // ioU threshold for non-max suppression
    scoreThreshold: 0.79,   // confidence threshold for predictions.
};

// to get navigator working on every browser
navigator.getUserMedia = 
    navigator.getUserMedia      ||
    navigator.webkitGetUserMedia||
    navigator.mozGetUserMedia   ||
    navigator.msGetUserMedia;

// vars
const video  = document.querySelector('#video'); 
const canvas = document.querySelector('#canvas');
const ctx    = canvas.getContext('2d');
let model;

// run detection teiknar það sem api sér og consle logar það 
// (temp for the most part, útreiknigar koma hingað seinna)
const runDetection = () => {
    model.detect(video)
        .then(predictions => { 
            console.log(predictions);
            model.renderPredictions(predictions, canvas, ctx, video);
            requestAnimationFrame(runDetection)
        });
}

// opna myndavél
handTrack.startVideo(video)
    .then(status => {
        if (status) { 
            navigator.getUserMedia(
                { video: {} }, 
                stream => { 
                    video.srcObject = stream;
                    runDetection() // run detection func
                },
                err => console.log(err)
            );
        }
    });

// onload function
handTrack.load(modelParams)
    .then(lmodel => model = lmodel);