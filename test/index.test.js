require('dotenv').config()
const expect = require('chai').expect;
const api_token = process.env.API_TOKEN;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');


describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://www.strava.com/api/v3')
      .get('/segments/229781?access_token='+ api_token)
      .reply(200, response);
  });

  it('Gets a user by username', () => {
    return getUser('229781')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of firstname, lastname and city for the response
        expect(response.name).to.equal('Hawk Hill')
        expect(response.athlete_count).to.equal(38995)
        expect(response.hazardous).to.equal(false)
      });
  });
});
