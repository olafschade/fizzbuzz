for (let i = 1; i <= 999; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log('o schade');
    else if (i % 3 == 0)
        console.log('o');
    else if (i % 5 == 0)
        console.log('schade');
    else
        console.log(i);
}
