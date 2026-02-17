# React MFE (Webpack)

This is a Module Federation remote application built with React and Webpack.

## Scripts

- `npm start`: Runs the development server on port 4202.
- `npm run build`: Builds the production bundle.
- `npm run lint`: Lints the source code.

## Module Federation

Exposes:
- `./Component`: The main `App` component.

Consumable as:
`reactmfe@http://localhost:4202/remoteEntry.js`
