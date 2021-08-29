const { createStore } = require("redux");
const { default: calculation } = require("./reducer/reducer");



const store = createStore(calculation,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());






export default store;

