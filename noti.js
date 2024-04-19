// Add an event listener to the button
document.getElementById('notification-btn').addEventListener('click', function() {
    // Request permission for notifications
    Notification.requestPermission().then(function(permission) {
        // Check if permission is granted
        if (permission === 'granted') {
            // Create a new notification
            const notification = new Notification('Ah beoun Online Shop', {
                body: 'This is more text',
                data: { hello: 'world' },
                icon: "logo.png",
                tag: ""
            });

            // Add an event listener to the notification
            notification.addEventListener('error', function() {
                alert('Error occurred while displaying notification');
            });
        } else {
            alert('Permission for notifications denied');
        }
    });
});
