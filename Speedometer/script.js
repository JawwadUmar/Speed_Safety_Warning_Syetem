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

    // Call the exportSpeed function to export the current speed
    exportSpeed(currentSpeed);
}

function onError(error) {
    alert(`Error getting location: ${error.message}`);
}

window.addEventListener("beforeunload", () => {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
});

async function exportSpeed(speed) {
    // For demonstration purposes, let's simulate an asynchronous delay and log the speed.
    await new Promise(resolve => setTimeout(resolve, 1)); // Simulating delay
    console.log(`Exported speed: ${speed}`);
}

// export { exportSpeed };





















// const startButton = document.getElementById("startButton");
// const speedDisplay = document.getElementById("speedDisplay");

// let watchId;

// startButton.addEventListener("click", () => {
//     if ("geolocation" in navigator) {
//         startButton.disabled = true;
//         watchId = navigator.geolocation.watchPosition(updateSpeed, onError, { enableHighAccuracy: true });
//     } else {
//         alert("Geolocation is not supported by your browser.");
//     }
// });

// function updateSpeed(position) {
//     const currentSpeed = position.coords.speed || 0;
//     speedDisplay.textContent = `Speed: ${currentSpeed.toFixed(2)} m/s`;

//     // Call the exportSpeed function to export the current speed
//     exportSpeed(currentSpeed);
// }

// function onError(error) {
//     alert(`Error getting location: ${error.message}`);
// }

// window.addEventListener("beforeunload", () => {
//     if (watchId) {
//         navigator.geolocation.clearWatch(watchId);
//     }
// });

// export async function exportSpeed(speed) {
//     // For demonstration purposes, let's simulate an asynchronous delay and log the speed.
//     await new Promise(resolve => setTimeout(resolve, 1)); // Simulating delay
//     console.log(`Exported speed: ${speed}`);
// }























// // const startButton = document.getElementById("startButton");
// // const speedDisplay = document.getElementById("speedDisplay");

// // let watchId;

// // startButton.addEventListener("click", () => {
// //     if ("geolocation" in navigator) {
// //         startButton.disabled = true;
// //         watchId = navigator.geolocation.watchPosition(updateSpeed, onError, { enableHighAccuracy: true });
// //     } else {
// //         alert("Geolocation is not supported by your browser.");
// //     }
// // });

// // function updateSpeed(position) {
// //     const currentSpeed = position.coords.speed || 0;
// //     speedDisplay.textContent = `Speed: ${currentSpeed.toFixed(2)} m/s`;
// // }

// // function onError(error) {
// //     alert(`Error getting location: ${error.message}`);
// // }

// // window.addEventListener("beforeunload", () => {
// //     if (watchId) {
// //         navigator.geolocation.clearWatch(watchId);
// //     }
// // });

// // export async function exportSpeed(speed) {
// //     // For demonstration purposes, let's simulate an asynchronous delay and log the speed.
// //     await new Promise(resolve => setTimeout(resolve, 1)); // Simulating delay
// //     console.log(`Exported speed: ${speed}`);
// // }

