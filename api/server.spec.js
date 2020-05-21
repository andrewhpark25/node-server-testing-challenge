const server = require('./server.js');

const supertest = require('supertest');

const db = require("../data/dbConfig");
beforeEach(async () => {
  await db.seed.run();
});



describe('server', () => {
    it('can run the tests', () => {
        expect(true).toBeTruthy();
    })

        describe('GET /players', () => {
            it('should return an array', () => {
                return (
                supertest(server).get('/players').then(response => {
                    expect(Array.isArray(response.body)).toBe(true);
                })
                );
              }) 
         })
         describe('GET /players', () => {
            it('should return an array with 3 elements', () => {
                return (
                supertest(server).get('/players').then(response => {
                    expect(response.body).toHaveLength(3);
                })
                );
              }) 
         })

         describe('POST /players', () => {
            it('should return status 201', async () => {

                const response = await  supertest(server).post('/players').send({id: 4, name:"Cristiano Ronaldo", team:"Juventus", position:"Striker"})

                 expect(response.status).toBe(201);
                
              }) 
             
         })

         
         describe('POST /players', () => {
            it('should return team name Manchester United', async () => {

                const player = await  supertest(server).post('/players').send({id: 5, name:"Paul Pogba", team:"Manchester United", position:"Midfielder"})

                 expect(player.body.team).toBe("Manchester United");
                
              }) 
             
         })

         describe('DELETE /players/:id', () => {
            it('should return status 200 and length of array after deleting', async () => {

                const response = await  supertest(server).delete('/players/3');

                 expect(response.status).toBe(200);

                 const players = await supertest(server).get("/players");
                 expect(players.body.length).toBe(2);
                      }) 
         }) 

         describe('PUT /players/:id', () => {
            it('should return status 200 and player name Juan Mata', async () => {

                const response = await  supertest(server).put('/players/2').send({id: 2, name:"Juan Mata", team:"Manchester United", position:"Midfielder"})

                 expect(response.status).toBe(200);
                 expect(response.body.name).toBe("Juan Mata");
              }) 
             
         })

         describe('GET /players/:id', () => {
            it('should return status 200 and player name Bruno Fernandes', () => {
                return (
                supertest(server).get('/players/1').then(response => {
                    expect(response.status).toBe(200);
                    expect(response.body.name).toBe("Bruno Fernandes");
                })
                );
              }) 
         })

     
})