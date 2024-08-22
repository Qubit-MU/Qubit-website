document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('home-video');
    
    video.addEventListener('ended', () => {
        const homeDiv = document.querySelector('.home');
        
        homeDiv.innerHTML = `
            <div style="position: relative;">
                <img src="img/HomeImage.jpg" alt="Home Image" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="overlay-text">
                <h2>Hello, we are</h2>
                <h1>The Qubit Club Mahindra University</h1>
                <h2>We work on Quantum Computing</h2>
                </div>
            </div>
        `;
    });
});

