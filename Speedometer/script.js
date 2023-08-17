const startButton = document.getElementById("startButton");
const speedDisplay = document.getElementById("speedDisplay");

let watchId;

startButton.addEventListener("click", () => {
    if ("geolocation" in navigator) {
        startButton.disabled = true;
        watchId = navigator.geolocation.watchPosition(updateSpeed, onError, { enableHighAccuracy: true });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

function updateSpeed(position) {
    const currentSpeed = position.coords.speed || 0;
    speedDisplay.textContent = `Speed: ${currentSpeed.toFixed(2)} m/s`;
}

function onError(error) {
    alert(`Error getting location: ${error.message}`);
}

window.addEventListener("beforeunload", () => {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
});
