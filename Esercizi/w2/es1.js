'use strict';

var dayjs = require('dayjs')

function createFilm(id, title, isfavorite = false, date, rating){
    const film = {
        id: id,
        title: title,
        isfavorite: isfavorite,
        date: date,
        rating: rating
    }
    
    return film;
}

function FilmLibrary(id){
    this.id = id;
    this.library = [];
    this.addNewFilm = (film) => {this.library.push(film)};
    this.toString = () => {this.library.forEach(f => console.log(f))}
    this.sortByDate = () => {};
    this.deleteFilm = (id) => {this.library = this.library.filter(x=>{
                                                    if(x!=id) return true})};
    this.resetWatchedFilms = () => {};
    this.getRated = () => {}; 
 
}

function Film(id, title, isfavorite = false, date, rating){
    this.id = id;
    this.title = title
    this.isfavorite = isfavorite
    this.date = date
    this.rating = rating
}

debugger;
const library = new FilmLibrary(0)

const films = [
    {
    Id: 1, 
    Title: "Pulp Fiction", 
    Favorite: true, 
    Watchdate: "March 10, 2023", 
    Score: 5 
    },{
    Id: 2, 
    Title: "21 Grams", 
    Favorite: true, 
    Watchdate: "March 17, 2023", 
    Score: 4  
    },{
    Id: 3, 
    Title: "Star Wars", 
    Favorite: false, 
    Watchdate: "not defined", 
    Score: "not assigned"  
    },{
    Id: 4, 
    Title: "Matrix", 
    Favorite: false, 
    Watchdate: "not defined", 
    Score: "not assigned" 
    },{
    Id: 5, 
    Title: "Shrek", 
    Favorite: false, 
    Watchdate: "March 21, 2023", 
    Score: 3 
    }
]
films.forEach(element => {
    library.addNewFilm(
        new Film(
        element.Id, element.Title, 
        element.Favorite, 
        element.Watchdate == "not defined"? undefined:dayjs(element.Watchdate), 
        element.Score == "not assigned"?undefined:element.Score)
        );  
});
library.toString()