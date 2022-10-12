// Chargement de l'application
const app = require('../index.js')
const request = require('supertest')

// Test de la route par défaut
describe('GET /', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/')
            .expect(200, done)
    })
})

// Test de la route /hello
describe('GET /hello', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/hello')
            .expect(200, done)
    })
})

// Test de la route /hello avec paramètre name
describe('GET /hello/:name', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/hello?name=Michel')
            .expect(200, done)
    })
})

// Test de la route /articles
describe('GET /articles', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/articles')
            .expect(200, done)
    })
})

// Test de la route /articles avec paramètre id
describe('GET /articles/:id', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b')
            .expect(200, done)
    })
})

// Test de post sur la route /articles
describe('POST /articles', _ =>
{
    it('should return 201 CREATED', done =>
    {
        request(app)
            .post('/articles?id=1234&title=Article%202&content=Interressant&date=08/12/2021&author=Michel')
            //.send({ id : '1234', title : 'My article', content : 'Contenu du truc', date : '04/10/2022', author : 'Michel Michel' })
            .expect(201, done)
    })
})

// Test de la route /comments issue de la route /articles/:id
describe('GET /articles/:id/comments', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments')
            .expect(200, done)
    })
})

// Test de post sur la route /comments issue de la route /articles/:id
describe('POST /articles/:id/comments', _ =>
{
    it('should return 201 CREATED', done =>
    {
        request(app)
            .post('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments?id=1414&timestamp=1674563210&content=Interressant&articleId=6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b&author=John Johnson')
            .expect(201, done)
    })
})

// Test de la route /comments avec paramètre id issue de la route /articles/:id/
describe('GET /articles/:id/comments/:id', _ =>
{
    it('should return 200 OK', done =>
    {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments/9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')
            .expect(200, done)
    })
})

//Cas avec des erreurs
// Test d'une route inexistante
describe('GET /unknown', _ =>
{
    it('should return 404 NOT FOUND', done =>
    {
        request(app)
            .get('/unknown')
            .expect(404, done)
    })
})

// Test d'une route avec un article inconnu
describe('GET /articles/:id', _ =>
{
    it('should return 404 NOT FOUND', done =>
    {
        request(app)
            .get('/articles/9999')
            .expect(404, done)
    })
})

// Test de post sur la route /articles avec un article non conforme
describe('POST /articles', _ =>
{
    it('should return 400 BAD REQUEST', done =>
    {
        request(app)
            .post('/articles')
            .send({})
            .expect(400, done)
    })
})

// Test d'une route avec un commentaire inconnu
describe('GET /articles/:id/comments/:id', _ =>
{
    it('should return 404 NOT FOUND', done =>
    {
        request(app)
            .get('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments/9999')
            .expect(404, done)
    })
})

// Test de post sur la route /comments issue de la route /articles/:id avec un commentaire non conforme
describe('POST /articles/:id/comments', _ =>
{
    it('should return 400 BAD REQUEST', done =>
    {
        request(app)
            .post('/articles/6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b/comments')
            .send({})
            .expect(400, done)
    })
})

