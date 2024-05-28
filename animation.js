document.addEventListener('DOMContentLoaded', function() {
    const initialContainer = document.getElementById('initialContainer');
    const outputContainer = document.getElementById('output');
    const lottieContainer = document.getElementById('lottieAnimation');

    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', function(event) {
            // Ensure containers are hidden
            initialContainer.style.display = 'none';
            outputContainer.style.display = 'none';
            lottieContainer.style.display = 'flex'; // Activate flexbox centering

            // If an animation is already playing, stop and destroy it
            if (window.currentLottieAnimation) {
                window.currentLottieAnimation.destroy();
            }

            // Load and play the Lottie animation
            window.currentLottieAnimation = lottie.loadAnimation({
                container: lottieContainer,
                renderer: 'svg',
                loop: false,
                autoplay: true,
                path: 'https://lottie.host/68bc5369-e874-43d0-9d5b-176d4e99850b/74OtWTJKOh.json'
            });

            // When the animation completes
            window.currentLottieAnimation.addEventListener('complete', () => {
                lottieContainer.style.display = 'none';
                outputContainer.style.display = 'block';
            });
        });
    });
});
