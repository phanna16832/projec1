function requestNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    } else {
        // Request permission from the user
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                showNotification("Thank for purchasing in the app");
            }
        });
    }
}

function showNotification(title, body) {
    // Check if notifications are supported and permission is granted
    if (Notification.permission === "granted") {
        // Create and show the notification
        var notification = new Notification(title, { body: body });
    }
}
