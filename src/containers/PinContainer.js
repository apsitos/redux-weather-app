// import { connect } from 'react-redux';
// import App from '../components/App'
//
// const mapStateToProps = () => {
//   return {
//     text: "It works!"
//   }
// }
// //
// // const mapDispatchToProps = dispatch => {
// //
// // }
//
// export default connect(mapStateToProps)(App);

import PinContainer from '../components/PinContainer'

const mapStateToProps = (state) => {
  return state;
  // Some code to connect Component to State within the Redux Store
}

const mapDispatchToProps = (dispatch) => {
  return null;
  // Some code to connect Component to app Actions and therefore Reducers within Redux Store
}

export default connect(mapStateToProps, null)(PinContainer)
