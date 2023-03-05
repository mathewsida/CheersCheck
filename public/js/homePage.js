let addCardVisibleState = false;
const favoriteSwitchContainer = document.querySelector('.modal-switch');
const liquorDescription = document.getElementById('liquorDescription');
const closeButton = document.getElementById('add-close-button');
const openAddInventoryButton = document.getElementById(
    'openAddInventoryButton'
);
const liquorSelect = document.getElementById('liquorSelect');
const liquorImage = document.getElementById('liquorImage');
const inventoryContainer = document.querySelector('.inventory-container');
const favoriteSwitch = document.querySelector('#addFavorite');
const addPostButton = document.querySelector('#add-post-button');
let currentlySelectedLiquor;
document.addEventListener('DOMContentLoaded', function () {
    closeButton.addEventListener('click', function () {
        addModal();
    });

    openAddInventoryButton.addEventListener('click', function () {
        addModal();
    });

    getLiquorList();

    liquorSelect.addEventListener('change', function () {
        setLiquorData(liquorSelect.value);
    });
    addPostButton.addEventListener('click', function () {
        addToInventory();
    });
    $(document).ready(function () {
        $('#inventoryTable').DataTable({
            scrollY: '462px',
        });
        populateDrawer();
    });
});

const populateDrawer = async () => {
    const response = await fetch(`api/inventory/true`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        let data = await response.json();
        let target;
        for (let i = 0; i < data.length; i++) {
            if (i < 9) {
                target = document.getElementById(`drawer${i}`);
                target.src = `/images/liquor/${data[i].liquor.image}.png`;
                target.style = 'visibility:visible';
            } else {
                break;
            }
        }
    }
    // for(i=0;i<)
};

const addToInventory = async () => {
    const response = await fetch('api/inventory/', {
        method: 'POST',
        body: JSON.stringify({
            liquor_id: currentlySelectedLiquor.liquor_id,
            favorite: favoriteSwitch.checked,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.reload();
    }
};
const setLiquorData = async (id) => {
    if (id !== 0) {
        const response = await fetch(`api/liquor/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            let data = await response.json();
            liquorDescription.innerHTML = data.description;
            liquorImage.src = `/images/liquor/${data.image}.png`;
            liquorImage.style = 'visibility:visible';
            favoriteSwitchContainer.style = 'visibility:visible';
            addPostButton.disabled = false;
            currentlySelectedLiquor = data;
        }
    }
};
const getLiquorList = async () => {
    const response = await fetch('api/liquor/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        let data = await response.json();
        let option;

        option = document.createElement('option');
        option.setAttribute('value', '0');
        option.setAttribute('disabled', 'true');
        option.innerHTML = `Please Select Your Liquor`;
        await liquorSelect.appendChild(option);
        liquorSelect.value = 0;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.setAttribute('value', data[i]['liquor_id']);
            option.innerHTML = `${data[i].type} | ${data[i].name} | ${data[i].volume}`;
            await liquorSelect.appendChild(option);
        }
    } else {
        alert('HTTP-Error: ' + response.status);
    }
};

const addModal = () => {
    liquorDescription.innerHTML = '';
    liquorImage.src = '';
    liquorImage.style = 'visibility:hidden';
    favoriteSwitchContainer.style = 'visibility:hidden';
    addPostButton.disabled = true;
    if (addCardVisibleState) {
        anime({
            targets: inventoryContainer,
            translateX: '100%',
            easing: 'easeInOutSine',
            duration: 500,
        });
        addCardVisibleState = false;
    } else {
        anime({
            targets: inventoryContainer,
            translateX: 0,
            easing: 'easeInOutSine',
            duration: 500,
        });
        addCardVisibleState = true;
    }
};
