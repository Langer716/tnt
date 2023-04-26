const scores = document.getElementById('scores');

fetch('/data/scores.json')
    .then(response => response.json())
    .then(data => {
        // Sort the data by score in descending order
        data.sort((a, b) => b.score - a.score);

        // Loop through the sorted data and add rows to the table
        data.forEach((score, index) => {
            const row = document.createElement('tr');
            const name = document.createElement('td');
            const scoreValue = document.createElement('td');

            name.textContent = score.name;
            scoreValue.textContent = score.score;

            if (index === 0) { // If this is the top player
                row.classList.add('top'); // Add a "top" class to the row
            }

            row.appendChild(name);
            row.appendChild(scoreValue);
            scores.appendChild(row);
        });
    });

const infoButton = document.querySelector('.info-button');
const infoPanel = document.querySelector('.info-panel');

infoButton.addEventListener('click', () => {
    infoPanel.classList.toggle('open');
});
