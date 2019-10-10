require('dotenv').config()
const expect = require('chai').expect;
const api_token = process.env.API_TOKEN;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');

describe('Get User tests', () => {
  beforeEach(() => {
    nock('https://www.strava.com/api/v3')
      .get('/athletes/joseph_townshend/?access_token='+ api_token)
      .reply(200, response);
  });

  it('Gets a user by username', () => {
    return getUser('joseph_townshend')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');

        //Test result of firstname, lastname and city for the response
        expect(response.firstname).to.equal('joseph')
        expect(response.lastname).to.equal('townshend')
        expect(response.city).to.equal('London')
      });
  });
});
