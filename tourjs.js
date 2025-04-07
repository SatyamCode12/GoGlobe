const form = document.getElementById('searchForm');
        
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('startDate').value;

    const response = await fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ destination, startDate })
    });

    const data = await response.json();
    alert(data.message); // Displaying the response message from the server
});