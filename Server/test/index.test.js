const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
    id: 123,
    name: 'Name',
    species: 'Human',
    origin: {
        name: 'Earth',
    },
    image: 'image.jpg',
    gender: 'male',
    status: 'Alive'
}

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status: 200", async () => {
            // await request.get('/rickandmorty/character/1').expect(200);
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
           
            for(const prop in character) {
                expect(response.body).toHaveProperty(prop);
            }
        });

        it("Si hay un error responde con status 500", async () => {
            const response = await request.get('/rickandmorty/character/18fdh');
            expect(response.statusCode).toBe(500);
        });
    });

    describe("GET /rickandmorty/login", () => {
        const access = { access: true};
        it("Responde con un objeto con la propiedad access un true si la información del usuario es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=correo@correo.com&password=asd123');
            expect(response.body).toEqual(access);
        });

        it("Responde con un objeto con la propiedad access un false si la información del usuario no es válida", async () => {
            const response = await request.get('/rickandmorty/login?email=coreo@correo.com&password=asd456');
            access.access = false;
            expect(response.body).toEqual(access);
        });
    });

    describe("POST /rickandmorty/fav", () => {
        it("Debe guardar el personaje en favoritos", async () => {
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        });

        it("Debe agregar personajes a favoritos sin eliminar los existentes", async () => {
            character.id = 321;
            character.name = 'Another Human';
            const response = await request.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    });

    describe("DELETE /rickandmorty/fav/:id", () => {
        it("Si el ID solicitado no existe, deberia retornar un arreglo con todos los favoritos", async () => {
            const response = await request.delete('/rickandmorty/fav/2gjs');
            expect(response.body.length).toBe(2);
        });

        it("Se elimina el personaje si el ID es válido", async () => {
            const response = await request.delete('/rickandmorty/fav/123');
            expect(response.body.length).toBe(1);
        });
    });
});




