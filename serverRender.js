// import React from 'react';
// import ReactDOMServer from 'react-dom/server';

// import App from './src/components/App';

// import config from './config';
// import axios from 'axios';

// const getApiUrl = (deptId) => {
//   if (deptId) {
//     return `${config.serverUrl}/api/info/${deptId}`;
//   }
//   return `${config.serverUrl}/api/info`;
// };

// const getInitialData = (deptId, apiData) => {
//   if (deptId) {
//     return {
//       currentDeptId: apiData.id,
//       courses: {
//         [apiData.id]: apiData
//       }
//     };
//   }
//   return {
//     courses: apiData
//   };
// };


// const serverRender = (deptId) =>
//   axios.get(getApiUrl(deptId))
//     .then(resp => {
//       const initialinfo = getInitialData(deptId, resp.data);
//       return{
//         initialMarkup :ReactDOMServer.renderToString(
//         <App initialinfo={initialinfo}/>),
//         initialinfo
//       };
//     });

// export default serverRender;
const {Provider, connect} = ReactRedux;
const {createStore, applyMiddleware} = Redux;
const thunk = ReduxThunk.default;

function fetchPostsRequest(){
  return {
    type: "FETCH_REQUEST"
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: "FETCH_SUCCESS",
    payload
  }
}

function fetchPostsError() {
  return {
    type: "FETCH_ERROR"
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS": 
      return {...state, posts: action.payload};
    default:
      return state;
  }
} 

function fetchPostsWithRedux() {
	return (dispatch) => {
  	dispatch(fetchPostsRequest());
    return fetchPosts().then(([response, json]) =>{
    	if(response.status === 200){
      	dispatch(fetchPostsSuccess(json))
      }
      else{
      	dispatch(fetchPostsError())
      }
    })
  }
}

function fetchPosts() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  return fetch(URL, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}

class App extends React.Component {
	componentDidMount(){
  	this.props.fetchPostsWithRedux()
  }
	render(){
	  return (
    		<ul>
				{
        	this.props.posts && 
          this.props.posts.map((post) =>{
          	return(
            	<li>{post.title}</li>
            )
          })
        }
        </ul>
    )
  }
}


function mapStateToProps(state){
	return {
  	posts: state.posts
  }
}


let Container = connect(mapStateToProps, {fetchPostsWithRedux})(App);

const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('container')
);
