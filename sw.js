self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: '/path/to/notification-icon.png',
        vibrate: [200, 100, 200, 100, 200, 100, 400],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        }
    };
    event.waitUntil(
        self.registration.showNotification('Checkout Notification', options)
    );
});
