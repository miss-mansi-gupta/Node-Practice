const mouseFollower = document.querySelector(".mouse-follower")
let x = 0
let y = 0

addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e
    // mouseFollower.style.top = clientY + "px"
    // mouseFollower.style.left = clientX + "px"
    // mouseFollower.style.transform = `translate(${clientX}px, ${clientY}px)`
    x = clientX
    y = clientY

    far()
})

function far() {
    mouseFollower.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
    requestAnimationFrame(far)
}

far()