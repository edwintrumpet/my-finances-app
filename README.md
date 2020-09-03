<h1 align="center">My finances</h1>

<p align="center">
  <img src="https://github.com/edwintrumpet/my-finances-app/workflows/CI/badge.svg" alt="CI badge">
  <img src="https://github.com/edwintrumpet/my-finances-app/workflows/CD/badge.svg" alt="CD badge">
  <img src="https://github.com/edwintrumpet/my-finances-app/workflows/QA/badge.svg" alt="QA badge">
  <img src="https://img.shields.io/github/commit-activity/m/edwintrumpet/my-finances-app?logo=github" alt="commit activity badge">
  <img src="https://img.shields.io/github/last-commit/edwintrumpet/my-finances-app?logo=github" alt="last commit badge">
</p>

<p align="center">
  <img src="https://devicons.github.io/devicon/devicon.git/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/>
  <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/>
  <img src="https://d33wubrfki0l68.cloudfront.net/204482ca413433c80cd14fe369e2181dd97a2a40/092e2/assets/img/logo.svg" alt="eslint" width="40" height="40"/>
  <img src="https://simpleicons.org/icons/githubactions.svg" alt="githubaxctions" width="40" height="40"/>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  <img src="https://material-ui.com/static/logo_raw.svg" alt="material ui" width="40" height="40"/>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  <img src="https://simpleicons.org/icons/reactrouter.svg" alt="react router" width="40" height="40"/>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/>
  <img src="https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg" alt="webpack" width="40" height="40"/>
</p>

React app to manage personal finances

website http://myfinancesapp.s3-website-us-east-1.amazonaws.com/

## Development

Scripts

- **`npm i`** => Install dependencies
- **`npm start`** => Run app in develop mode
- **`npm run prebuild`** => Prepare global dependencies to production
- **`npm run build`** => Build static files to production
- **`npm run lint`** => Checkout linter errors
- **`npm run lint:fix`** => Fix linter errors
- **`npm test`** => Run tests
- **`npm run deploy:qa`** => Deploy app in staging to quality review

To work in this project with the previous scripts execute the following instructions

- Install dependencies
- Create `.env.dev` file as `.env.example` file with the corresponding values
- Run app in develop mode

## Deploy

- staging website https://edwintrumpet.github.io/my-finances-app/
- production website http://myfinancesapp.s3-website-us-east-1.amazonaws.com/

To deploy app in staging make a pull request to the staging branch, avoid use deploy script.

To deploy app in production make a pull request to the master branch.

To get production static files

- Install dependencies
- Create `.env` file as `.env.example` file with the corresponding values
- Prepare global dependencies to production
- Build static files to production

## Author

Edwin García  
spark.com.co@gmail.com

## License

[MIT](./LICENSE)
