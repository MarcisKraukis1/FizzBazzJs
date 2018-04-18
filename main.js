for (var i=1; i <= 100; i++)
{
    let rezultats = '';

    if (i % 3 == 0){
        rezultats += 'Fizz ';
    }
    if (i % 5 == 0){
       rezultats += 'Buzz ';
    }
    if( rezultats.length == 0){
        rezultats = i;
    }
    
       console.log(rezultats);
    
}
    