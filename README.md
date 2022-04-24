# Account service DD

# Install
Run npm run install to install all the project dependecies.

# Run
First run docker-compose up -d to start the services.
Then run npm run start to start the server.

# Deploy 
Run npm run build before.
Deployment is done on heroku.

heroku git:remote -a MY-HEROKU-APP
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set NODE_ENV=production

happy coding!
