const auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    let time = 180
    document.getElementById('target').innerText = token
    const interval = setInterval(() => {
        document.getElementById('timer').innerText = `${Math.floor(time / 60)}:${String(time % 60).padStart(2, '0')}`
        time--
        if (time < 0) {
            clearInterval(interval)
            document.getElementById('finish').disabled = true
        }
    }, 1000)
}