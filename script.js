// Fetch compliments from the text file
fetch('compliments.toml')
    .then(response => response.text())
    .then(data => {
        const compliments = data.split('\n');
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * compliments.length);
            document.getElementById('complimentContainer').innerText = compliments[randomIndex].trim();
        }, 1000);
    })
    .catch(err => console.error('Failed to load compliments:', err));
