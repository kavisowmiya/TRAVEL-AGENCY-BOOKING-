document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const customerName = document.getElementById('customerName').value;
        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travelDate').value;
        const packageType = document.getElementById('packageType').value;

        // Construct query parameters
        const queryParams = `?customerName=${encodeURIComponent(customerName)}&destination=${encodeURIComponent(destination)}&travelDate=${encodeURIComponent(travelDate)}&packageType=${encodeURIComponent(packageType)}`;

        // Redirect to confirmation page with query parameters
        window.location.href = `confirmation.html${queryParams}`;
    });
});
