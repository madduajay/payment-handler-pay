
function install() {

    navigator.serviceWorker.register('sw1.js')
        .then(() => {
        return navigator.serviceWorker.ready;
})
.then((registration) => {
        if (!registration.paymentManager) {
        console.log('No payment handler capability');
        return;
    }
    if (!registration.paymentManager.instruments) {
        console.log('Payment handler is not fully implemented. Cannot set the instruments.');
        return;
    }
    Promise.all([
    registration.paymentManager.instruments
        .set('instrument-key', {
            name: 'Chrome uses name and icon from the web app manifest',
            enabledMethods: ['https://127.0.0.1:8080/pay3'],
        }),
    registration.paymentManager.instruments.set(
        "new-card",
        {
            name: "Add new credit/debit card to ExampleApp",
            enabledMethods: ["basic-card"],
            capabilities: {
                supportedNetworks: ['visa','mastercard','amex','discover']
            }
        }),
        ])
        .then(() => {
            registration.paymentManager.instruments.get('instrument-key').then((instrument) => {
            console.log('registration.scope is' + registration.scope);
            console.log('enabledMethods is' + instrument.enabledMethods);

    }).catch((error) => {
        console.log(error);
    });
    })
    .catch((error) => {
        console.log(error);
    });
    })
    .catch((error) => {
        console.log(error);
    });
}



window.addEventListener('load', function(evt) {
    install();
});

