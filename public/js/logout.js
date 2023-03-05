const logoutFormHandler = async () => {
    if (logoutFormHandler) {
        try {
            const response = await fetch('/api/users/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                window.location.href = '/login'; // Redirect to login page after successful logout
            } else {
                throw new Error('Logout request failed');
            }
        } catch (error) {
            console.error(error);
        }
    }
};

document.querySelector('#logout').addEventListener('click', logoutFormHandler);
