document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#image-gallery .img-container img');
    const viewer = document.getElementById('image-viewer');
    const largeImage = document.getElementById('large-image');
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            viewer.classList.remove('hidden');
            largeImage.src = img.src;
            currentIndex = index;
        });
    });

    document.getElementById('close-btn').addEventListener('click', () => {
        viewer.classList.add('hidden');
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        largeImage.src = images[currentIndex].src;
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        largeImage.src = images[currentIndex].src;
    });
});

