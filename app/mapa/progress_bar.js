
var progress = document.getElementById('progress');
var progressBar = document.getElementById('progress-bar');

const updateProgressBar = (processed, total, elapsed, layersArray) => {
  if (elapsed > 1000) {
    // if it takes more than a second to load, display the progress bar:
    progress.style.display = 'block';
    progressBar.style.width = Math.round(processed / total * 100) + '%';
  }
  if (processed === total) {
    // all markers processed - hide the progress bar:
    progress.style.display = 'none';
  }
}
