# Strava_API

This is a repo to document an exploration of the Strava API.

### First Steps...

1. Set up an account on Strava.
2. Create an App on Strava - this gives you access to the API.
3. Download Postman.
4. My personal Strava account endpoint is `https://www.strava.com/api/v3/athletes/3801016`.
5. Enter your desired endpoint into the request field.
6. In the `KEY` field enter `access_token`.
7. In the `VALUE` field enter your unique access token.
8. Make a request!

https://medium.com/@annthurium/getting-started-with-the-strava-api-a-tutorial-f3909496cd2d

### OAuth tokens...

One thing I noticed was that you need to use a token for this API, I haven't worked in this way yet so I did a bit of research. I am aware that you should not keep your token in your code as if you commit to version control a bot may scrape your repo and find your token. So I need to find out how to obscure it.

I found that you can store it in an environment variable in a different file then use `.gitignore` to disclude the file from GitHub.

https://www.youtube.com/watch?v=17UVejOw3zA

Managed to get that working with the current `API_TOKEN` hidden in a `.env` file. I added a `.env_sample` file to show the user how to add their own tokens - this has been uploaded to GitHub with project.

### Mocking HTTP Requests...

Following this tutorial I got a mocked API request from github working and passing a test.

https://scotch.io/tutorials/nodejs-tests-mocking-http-requests

```js
$ npm install --save axios
$ npm install --save-dev mocha chai nock
```

Axios - A Promise based HTTP client for the browser and node.js
Mocha - A popular Node.js testing framework.
Chai - A BDD / TDD assertion library for Node.js
Nock - A HTTP mocking and expectations library for Node.js
