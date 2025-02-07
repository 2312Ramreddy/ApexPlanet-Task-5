function selectCar(carName, carNumber) {
    alert(`You have selected: ${carName} (Car No: ${carNumber})`);
    window.location.href = "payment.html"; // Redirect to payment page
}

document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");

    if (paymentForm) {
        paymentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            const cardName = document.getElementById("card-name").value;
            const cardNumber = document.getElementById("card-number").value;
            const expiry = document.getElementById("expiry").value;
            const cvv = document.getElementById("cvv").value;

            if (cardName && cardNumber && expiry && cvv) {
                alert("Payment Successful! Redirecting to history page...");
                
                // Save transaction to localStorage
                let history = JSON.parse(localStorage.getItem("rentalHistory")) || [];
                history.push({
                    car: localStorage.getItem("selectedCar"),
                    date: new Date().toLocaleString(),
                    amount: "$150"
                });

                localStorage.setItem("rentalHistory", JSON.stringify(history));

                // Redirect to history page
                window.location.href = "history.html";
            } else {
                alert("Please fill in all details!");
            }
        });
    }
});

function selectCar(carName, carNumber) {
    alert(`You have selected: ${carName} (Car No: ${carNumber})`);
    localStorage.setItem("selectedCar", `${carName} (Car No: ${carNumber})`);
    window.location.href = "payment.html"; // Redirect to payment page
}
document.addEventListener("DOMContentLoaded", function () {
    const historyTable = document.getElementById("history-table");
    const clearHistoryBtn = document.getElementById("clear-history-btn"); // Button to clear history

    if (historyTable) {
        loadHistory(); // Load rental history on page load

        if (clearHistoryBtn) {
            clearHistoryBtn.addEventListener("click", function () {
                localStorage.removeItem("rentalHistory"); // Clear from localStorage
                loadHistory(); // Refresh the table
            });
        }
    }
});

// Function to load rental history
function loadHistory() {
    const historyTable = document.getElementById("history-table");
    if (!historyTable) return;

    let history = JSON.parse(localStorage.getItem("rentalHistory")) || [];
    let tbody = historyTable.querySelector("tbody");
    tbody.innerHTML = ""; // Clear previous entries

    if (history.length === 0) {
        tbody.innerHTML = "<tr><td colspan='5'>No rental history found.</td></tr>";
    } else {
        history.forEach(entry => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${entry.carImage}" alt="Car Image" width="100"></td>
                <td>${entry.carName}</td>
                <td>${entry.carNumber}</td>
                <td>${entry.date}</td>
                <td>${entry.amount}</td>
            `;
            tbody.appendChild(row);
        });
    }
}

// Function to save car details when selected
function selectCar(carName, carNumber, carImage) {
    alert(`You have selected: ${carName} (Car No: ${carNumber})`);
    
    let history = JSON.parse(localStorage.getItem("rentalHistory")) || [];
    history.push({
        carName: carName,
        carNumber: carNumber,
        carImage: carImage,
        date: new Date().toLocaleString(),
        amount: "$150"
    });

    localStorage.setItem("rentalHistory", JSON.stringify(history));

    window.location.href = "payment.html"; // Redirect to payment page
}
