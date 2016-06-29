
     var movies = [],
    

         entourage = {
             title: 'Entourage',
             genre: 'comedy',
             year: 2004,
             topActors: 'Adrian Grenier'
         },
         power = {
             title: 'Power',
             genre: 'crime',
             year: 2014,
             topActors: 'Omari Hardwick'
         },
         houseOfLies = {
             title: 'House of Lies',
             genre: 'comedy',
             year: 2012,
             topActors: 'Don Cheadle'
         },
         breakingBad = {
             title: 'Breaking Bad',
             genre: 'drama',
             year: 2008,
             topActors: 'Bryan Cranston'
         },
         gameOfThrones = {
             title: 'Game of Thrones',
             genre: 'adventure',
             year: 2011,
             topActors: 'Peter Dinklage'
         }

     movies.push(entourage)
     movies.push(houseOfLies)
     movies.push(gameOfThrones)
     movies.push(breakingBad)
     movies.push(power)

     console.log(movies)

     movies.sort(function(a,b){
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;

     })

     movies = JSON.stringify(movies)
