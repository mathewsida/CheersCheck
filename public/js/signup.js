// async function signupFormHandler(event) {
//     event.preventDefault();

//     const username = document.querySelector('#username-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (username && email && password) {
//         const response = await fetch('/api/users/signup', {
//             method: 'POST',
//             body: JSON.stringify({
//                 username,
//                 email,
//                 password,
//             }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/');
//             console.log('success');
//         } else {
//             alert(response.statusText);
//         }
//     }
// }

// document.querySelector('#signup').addEventListener('submit', signupFormHandler);

// signup form
const signupFormHandler = async (event) => {
    event.preventDefault();
    const userObj = {
        username: document.querySelector('#username-signup').value,
        email: document.querySelector('#email-signup').value,
        password: document.querySelector('#password-signup').value,
    };
    console.log(userObj);
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => {
        if (response.ok) {
            console.log('Account successfully created!');
            document.location.replace('/');
        } else {
            alert('UH OH! Something went wrong. Sign up failed.');
        }
    });
};
document.querySelector('#signup').addEventListener('submit', signupFormHandler);
