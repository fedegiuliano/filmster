const startServer = require('../../server/src/index.js')
const fetch = require('node-fetch');

let server, baseURL;

beforeAll(async () => {
    server = await startServer();
    baseURL = `http://localhost:${server.address().port}/api/v1`
})

afterAll(() => {
    server.close()
})

test('Se debería iniciar la aplicación sin películas', async () => {
    const URL = `${baseURL}/movies`;
    const req = await fetch(URL);
    const movies = await req.json();
    expect(movies.length).toBe(0);
})
test('Se debería reflejar en la base de datos la pelicula agregada', async () =>
{
	const URL = `${baseURL}/movies`;
	 const movie = {
        name: 'troya',
        plot: 'Pelicula de accion',
        year: '2004',
        country: 'EEUU',
        runtime: '111',
        language: 'England',
        generes: 'accion',
        writers: 'nose',
        directors: 'nose'
    }
	
    await fetch(URL, {
        method: 'post',
        body:    JSON.stringify({title:movie.name,description:movie.plot,year:anio,
        runtime:movie.runtime,country:movie.country,language:movie.language,
        genres:movie.generes,writers:movie.writers,directors:movie.directors
        })
    })	
	

	//const result = function getAll() 
    const movies = await fetch('/api/v1/movies')
        .then(result => result.json())
		

  expect(movies.length).toBe(1);

}) 


test('Se deberÌa iniciar la aplicaciÛn sin pelÌculas', async () => {
    const URL = `${baseURL}/movies`;
    const req = await fetch(URL)
    const movies = await req.json()

    expect(movies.length).toBe(0)
});


test('Despues de crear una pelicula, exista esta en la BD', async () => {
   
    const movieData = {
        title: 'Back to the Future',
        description: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
        year: 1985,
        runtime: 116,
        country: 'United States',
        language: 'English',
        genres: ['Adventure', 'Comedy', 'Science Fiction'],
        directors: ['Robert Zemeckis'],
        writers: ['Robert Zemeckis', 'Bob Gale']
    };

    await fetch(`${baseURL}/movies`, {
        method: 'POST',
        body: JSON.stringify(movieData),
        headers:{
            'Content-Type': 'application/json'
        }
    });

    
    const receivedMovie = await fetch(`${baseURL}/movies`)
    .then(function(response) {
        return response.json();
      })
    

    expect(movieData.title).toBe(receivedMovie[0].title);
    expect(movieData.description).toBe(receivedMovie[0].description);
    expect(movieData.year).toBe(receivedMovie[0].year);
    expect(movieData.runtime).toBe(receivedMovie[0].runtime);
    expect(movieData.country).toBe(receivedMovie[0].country);
    expect(movieData.language).toBe(receivedMovie[0].language);
    expect(movieData.genres).toStrictEqual(receivedMovie[0].genres);
    expect(movieData.directors).toStrictEqual(receivedMovie[0].directors);
    expect(movieData.writers).toStrictEqual(receivedMovie[0].writers);
    

})
