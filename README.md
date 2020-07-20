# ghent-parkings
Visualization of realtime parking data of Ghent.  
https://robrechtme.github.io/ghent-parkings/

TODO: add screenshot/gif

## Installation
You need [Yarn](https://classic.yarnpkg.com/en/docs/install) and [Node.js](https://nodejs.org/en/download/) (v10 or higher) to get the development environment running. 
```bash
git clone https://github.com/RobrechtMe/ghent-parkings.git
cd ghent-parkings
yarn install
yarn start
```
Then open http://localhost:3000/ to see the app.

## Code
### Components
All components are written as functional components using [React Hooks](https://reactjs.org/docs/hooks-reference.html). This pattern will arguably replace class components over time, and it is encouraged to use them in new projects. The components have been written with scalability in mind: if they can be reused in the future, they are placed into the `components` folder. In the `pages` folder, all page-specific components are stored. A `_partials` folder contains page components that are too specific to be reused. 

### API
To fetch the real-time parking data, Vercel's [SWR](https://swr.vercel.app/) is used. This React Hook first returns the data from cache and then fetches the request. When the request is finished, the cached data is updated. The parking data is polled every 5 minutes. A custom `useParkings` hook is written such that all api functionality is separated from component functionality.   
The project does not include [React Redux](https://react-redux.js.org/) to store global state because the application is very small, so we can simply pass the component's state down to children components. 


### Styling
For styling [CSS Modules](https://github.com/css-modules/css-modules) are used. This is my first time using CSS modules. I have used Sass and TailwindCSS and since CSS modules is builtin in create-react-app I gave it a try. I would favor a more scalable solution like Tailwind CSS or styled-components.  

Except [normalize.css](https://github.com/csstools/normalize.css), no other CSS framework (e.g. Bootstrap, Semantic UI, ...) is used. This means all grids and basic features have to be written from scratch, but no framework rules need to be overwritten. 

## Deployment
The project provides two options for deployment to a production environment:
### GitHub pages
GitHub pages provides you with free hosting. Thanks to the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package, a Node.js app can easily be deployed using:
```bash
yarn deploy
```

### Docker
Alternatively, the app can be deployed anywhere using a docker container. A docker image can be built using:
```bash
docker build . -t robrechtme/ghent-parkings
```
next, the image can be ran using:
```bash
docker run -p 3000:80 robrechtme/ghent-parkings
```