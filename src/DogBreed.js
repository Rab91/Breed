const breed_list = 'https://dog.ceo/api/breeds/list/all';
const random_dog = 'https://dog.ceo/api/breeds/image/random';
const random_breed = `https://dog.ceo/api/breed/hound/images/random`;

const dogBtn = document.querySelector('.button');
const dogDropdown = document.querySelector('.dropdown');
const dogImages = document.querySelector('.images');
const loader = document.querySelector('.loader');

function DogBreed() {
    const promise = fetch(random_dog);
    loader.classList.add('show'); // Displaying load before images
    promise
        .then((response) => {
            const processedResponse = response.json();
            return processedResponse;
        })
        .then((data) => {
            loader.classList.remove('show'); // Hiding load after images

            // creating image element and adding them to the images
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Dog';
            img.width = 250;
            dogImages.appendChild(img);
        });
}

function DropdownList() {
    const promise = fetch(breed_list);
    promise
        .then((response) => {
            const processedResponse = response.json();
            return processedResponse;
        })
        .then((data) => {
            const breedList = Object.keys(data.message);
            breedList.map((breed) => {
                const option = document.createElement('option');
                option.value = breed;
                option.innerText = breed;
                dogDropdown.appendChild(option);
            });
        });
}

window.addEventListener('click', DropdownList());
dogBtn.addEventListener('click', DogBreed);