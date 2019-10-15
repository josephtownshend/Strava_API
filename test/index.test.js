require('dotenv').config()
const expect = require('chai').expect;
const api_token = process.env.API_TOKEN;
const nock = require('nock');

const getSegment = require('../index').getSegment;
const response = require('./response');


describe('Get segment tests', () => {
  beforeEach(() => {
    nock('https://www.strava.com/api/v3')
      .get('/segments/229781?access_token='+ api_token)
      .reply(200, response);
  });

  it('Gets a segment checks returning object', () => {
    return getSegment('229781')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object');
      });
  });

  it('Gets name, athlete_count & hazardous data', () => {
    return getSegment('229781')
      .then(response => {
        //Test result of name, athlete_count and hazardous for the response
        expect(response.name).to.equal('Hawk Hill')
        expect(response.athlete_count).to.equal(38995)
        expect(response.hazardous).to.equal(false)
      });
  });
});
