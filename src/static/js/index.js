// 左上角图标跟踪鼠标
document.addEventListener('mousemove', e => {
    const item = document.querySelectorAll(".item")

    const mouseX = e.clientX
    const mouseY = e.clientY

    item.forEach(sqr => {
        const sqrX = sqr.offsetLeft
        const sqrY = sqr.offsetTop

        const diffX = mouseX - sqrX
        const diffY = mouseY - sqrY

        const radians = Math.atan2(diffY, diffX)

        const angle = radians * 180 / Math.PI

        sqr.style.transform = `rotate(${angle}deg)`
    })
})