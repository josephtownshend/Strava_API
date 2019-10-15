require('dotenv').config()
const expect = require('chai').expect;
const api_token = process.env.API_TOKEN;
const nock = require('nock');

const getUser = require('../index').getUser;
const response = require('./response');
const getKom = require('../index').getKom;
const reponse_kom = require('./response_kom');

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
        // expect(response.lastname).to.equal('townshend')
        // expect(response.city).to.equal('London')
      });
  });
});
//
// describe('Get leaderboard tests', () => {
//   beforeEach(() => {
//     nock('https://www.strava.com/api/v3')
//       .get('/segments/229781/leaderboard/?access_token='+ api_token)
//       .reply(200, response);
//   });
//
//   it('Gets the data from a segment', () => {
//     return getKom(229781)
//       .then(response => {
//         //expect an object back
//         expect(typeof response).to.equal('object');
//
//         //Test result of firstname, lastname and city for the response
//         expect(response.kom_type).to.equal('kom')
//       });
//   });
// });
