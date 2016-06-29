
     var movies = [],


         entourage = {
             title: 'Entourage',
             genre: 'comedy',
             year: 2004,
             topActors: 'Adrian Grenier',
             rating:8.6
         },
         power = {
             title: 'Power',
             genre: 'crime',
             year: 2014,
             topActors: 'Omari Hardwick',
             rating:8.0
         },
         houseOfLies = {
             title: 'House of Lies',
             genre: 'comedy',
             year: 2012,
             topActors: 'Don Cheadle',
             rating:7.4
         },
         breakingBad = {
             title: 'Breaking Bad',
             genre: 'drama',
             year: 2008,
             topActors: 'Bryan Cranston',
             rating:9.5
         },
         gameOfThrones = {
             title: 'Game of Thrones',
             genre: 'adventure',
             year: 2011,
             topActors: 'Peter Dinklage',
             rating:9.5
         },


     movies.push(entourage)
     movies.push(houseOfLies)
     movies.push(gameOfThrones)
     movies.push(breakingBad)
     movies.push(power)

     console.log(movies)

    //  movies.sort(function(a,b){
    // if(a.title < b.title) return -1;
    // if(a.title > b.title) return 1;
    // return 0;
    //  })

    //sorts by rating
     movies.sort(function(a,b){
    if(a.rating > b.rating) return -1;
    if(a.rating < b.rating) return 1;
    return 0;
     })
     //pushes stringified text back into the array
     movies = JSON.stringify(movies)
