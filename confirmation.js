// Retrieve booking data from URL parameters
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('confirmCustomerName').innerText = urlParams.get('customerName');
document.getElementById('confirmDestination').innerText = urlParams.get('destination');
document.getElementById('confirmTravelDate').innerText = urlParams.get('travelDate');
document.getElementById('confirmPackageType').innerText = urlParams.get('packageType');

