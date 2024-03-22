rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4,
    dy: -4,
}

function drawBall() {
    ctx.beginPath()
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
    ctx.fillStyle = '#0095dd'
    ctx.fill()
    ctx.closePath()
}

paddle = {
    x: canvas.width / 2 - 40,
    y: canvas.height - 20,
    
}

drawBall()


rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})
