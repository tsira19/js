// ('progress-bar')[0]
// setInterval(() => {
//    const compudetstyle = getComputedStyle(progressBar)
//    const width = parseFloat(compudetstyle.getPropertyvalue('--width')) || 0
//    progressBar.Style.setproperty('--width' , width + .1 )
// }, 5);
const scrollableContainer = document.querySelector('.container_1');
const progressBar = document.getElementById('progressbar');

scrollableContainer.addEventListener('scroll', updateProgressBar);
function updateProgressBar(){
   const scrolledPercentage = (scrollableContainer.scrollTop / (scrollableContainer.scrollHeight - scrollableContainer.clientHeight)) * 100;
   progressBar.style.width = `${scrolledPercentage}%`;
   progressBar.setAttribute('aria-valuenow', scrolledPercentage);
}
