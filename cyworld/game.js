const startWord = () => {
    let word = document.getElementById('word').innerText
    let myword = document.getElementById('myword').value
    if (word[word.length - 1] === myword[0]) {
        document.getElementById('result').innerText = '정답입니다!'
        document.getElementById('word').innerText = myword
        document.getElementById('myword').value = ''
    } else {
        document.getElementById('result').innerText = '틀렸습니다!'
        document.getElementById('myword').value = ''
    }
}