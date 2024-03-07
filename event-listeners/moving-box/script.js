function disableScroll() {
    // Get the current page scroll position
    scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.scrollX ||
        document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

document.addEventListener('DOMContentLoaded', () => {
    disableScroll();    
    const rectangle = document.getElementById('rectangle');
    let posX = 0;
    let posY = 0;

    const moveRectangle = (e) => {
        const step = 20; // Change this value to adjust the movement step

        switch (e.key) {
            case 'ArrowUp':
                posY -= step;
                break;
            case 'ArrowDown':
                posY += step;
                break;
            case 'ArrowLeft':
                posX -= step;
                break;
            case 'ArrowRight':
                posX += step;
                break;
            default:
                return; // Exit the function if it's not an arrow key
        }

        rectangle.style.left = `${posX}px`;
        rectangle.style.top = `${posY}px`;
    };

    document.addEventListener('keydown', moveRectangle);
});
