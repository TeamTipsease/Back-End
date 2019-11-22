const request = require('supertest');

const server = require('../api/server')

const db = require('../data/dbConfig')
const authenticate = require('../auth/authMiddleware.js')
jest.mock('../auth/authMiddleware.js')

//beforeEach(resetTestDb)
describe('worker router test', () => {
    beforeAll(async () => {
        await db("service_workers").truncate();
    });
    
     
describe('workerRouter', () => {
    describe('GET /api/worker', () => {
        it('should return 200', () => {
            authenticate.mockImplementation((req, res, next) => {
                console.log("I ran the GET test");
                //req.user = { id: 1 };
                next();
              });
            // run server
            // make get request to /
            //see response 200
           return request(server).get('/api/worker').then(res => {
                expect(res.status).toBe(200);
            })
        })
    })



    describe('POST /api/worker', () => {
        it('should return 201 after post new worker', () => {
            
            return request(server)
                .post('/api/worker/1')
                .send({
                    user_id: 1,
                    name: 'Stanely', 
                    month_at_job: 40,
                    info: 'Works and Dunder Miflin',  
                    tagline: 'paper', 
                    tip: 3, 
                })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })

    describe('GET /:id', () => {
        it('it should return 200', () => {
            
            return request(server).get('/api/worker/1').then(res => {
                expect(res.status).toBe(200)
            })
        })
    })

    describe('PUT /api/worker/:id', () => {
        it('should return 201 after update ', () => {
            
            return request(server)
                .put('/api/worker/1')
                .send({
                    name: 'bob'
                })
                .then(res => {
                    expect(res.status).toBe(201)
                })
        })
    })
})
})