import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'node:test';
import testing from '..'

chai.should();
chai.use(chaiHttp)

describe('Test API', ()=> {

    describe('GET /users', ()=> {
        it('It should GET all the users', (done)=> {
            chai.request(testing).get('/users').end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done()
            })
        })
    })

    describe('GET /users/find/:id', ()=> {
        it('It Should GET a Users By Id', (done) => {
        const testID = 1;
            chai.request(testing).get(`/users/find/${testID}`)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('result')
                done()
            })
        })
    })

    describe('POST /users', () => {
        it('It Should POST a new user', (done) => {
            const body = {
                email:'tryTesting@gmail.com',
                fullname:'Try Testing'
            }
            chai.request(testing)
            .post('/users').send(body)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('result')
                done()
            })
        })
    })

    describe('PATCH /users/:id', () => {
        it('It should be PATCH an existing user', (done)=> {
            const testID = 1;
            const body = {
                email:'tryEdit@gmail.com',
                fullname:'Try Edit'
            }
            chai.request(testing)
            .patch(`/users/${testID}`).send(body)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('result')
                done()
            })
        })
    })

    describe('DELETE /users/:id', () => {
        it('It Should Delete an Existing user', (done) => {
            const testId = 1;
            chai.request(testing)
            .delete(`/users/${testId}`)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('result')
                done()
            })
        })
    })
})