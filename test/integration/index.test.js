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
	function create(movie) {fetch(URL, {
        method: 'post',
       body:    JSON.stringify({title:movie.name,description:movie.plot,year:anio,
       	runtime:movie.runtime,country:movie.country,language:movie.language,
       	genres:movie.generes,writers:movie.writers,directors:movie.directors})
    })	
	}

	const result= function getAll() {
    return fetch('/api/v1/movies')
        .then(result => result.json())
		}

  expect(movie.title).toBe(result.title);

}) 