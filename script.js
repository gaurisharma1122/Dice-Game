const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    //1st number generation
    const firstRandomNum = Math.floor(Math.random() * 6) + 1;
    const firstDiceImage = 'images/dice' + firstRandomNum + '.png';
    document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

    //2nd number generation 
    const secondRandomNum = Math.floor(Math.random() * 6) + 1;
    const secondDiceImage = 'images/dice' + secondRandomNum + '.png';
    document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);

    //logic to display winner
    if (firstRandomNum > secondRandomNum) {
        document.querySelector('h1').innerHTML = 'The winner is User 1';
    }
    else if (firstRandomNum < secondRandomNum) {
        document.querySelector('h1').innerHTML = 'The winner is User 2'
    }
    else {
        document.querySelector('h1').innerHTML = 'Its a draw';
    }
});




