self.addEventListener('canmakepayment', (evt) => {
    console.log('canmakepayment evt is ' + evt);
    evt.respondWith(true);
});

self.addEventListener('paymentrequest', (evt) => {
    console.log('paymentrequest evt is ' + evt);
    evt.respondWith({
        methodName: 'https://pacific-garden-30467.herokuapp.com/pay3',
        details: {
            token: '98700890000',
        },
    });
});

self.addEventListener('install', event => {
    console.log('sw1 installing..........');
});

self.addEventListener('activate', event => {
    console.log('sw1 now ready to handle');
});