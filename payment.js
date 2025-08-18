document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract payment information
    const paymentData = {
        bank: document.getElementById('bank').value,
        cardHolderName: document.getElementById('cardHolderName').value,
        cardNumber: document.getElementById('cardNumber').value,
        expiryDate: document.getElementById('expiryDate').value,
        cvv: document.getElementById('cvv').value
    };

    // Simple client-side validation
    if (paymentData.cardNumber.length !== 16 || paymentData.cvv.length !== 3) {
        document.getElementById('paymentResult').innerText = "Invalid card details. Please check again.";
        return;
    }

    // Simulate API call for payment processing (You can replace this with actual backend code)
    fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('paymentResult').innerText = "Payment successful! Booking confirmed.";
    })
    .catch(error => {
        console.error('Error processing payment:', error);
        document.getElementById('paymentResult').innerText = "Payment failed. Please try again.";
    });
});

