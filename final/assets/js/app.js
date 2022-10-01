const moveElements = (e) => {
    const shapes = document.querySelectorAll(".shape");
    const tracker = document.querySelector(".tracker");

    tracker.style.top = `${e.clientY}px`;
    tracker.style.left = `${e.clientX}px`;
    tracker.style.opacity = 1;

    shapes.forEach((shape) => {
        const shapeOffset = shape.getAttribute("data-offset");

        let offsetX = (window.innerWidth - e.clientX) * shapeOffset;
        let offsetY = (window.innerHeight - e.clientY) * shapeOffset;

        shape.style.translate = `${offsetX}px ${offsetY}px`;
    });
};

document.addEventListener("mousemove", moveElements);
