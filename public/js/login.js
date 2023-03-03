const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#name-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
            console.table('Successfully logged in.');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#login').addEventListener('submit', loginFormHandler);
