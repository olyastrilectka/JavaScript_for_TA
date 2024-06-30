document.addEventListener('DOMContentLoaded', () => {
    const fetchAuthorsBtn = document.getElementById('fetchAuthorsBtn');
    const authorsList = document.getElementById('authorsList');

    fetchAuthorsBtn.addEventListener('click', async () => {
        try {
            const response = await fetch('/authors');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();


            authorsList.innerHTML = '';

            data.forEach(author => {
                const li = document.createElement('li');
                li.textContent = author;
                authorsList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    });
});
