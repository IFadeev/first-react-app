import { connect } from 'react-redux';
import FriendsProfile from './FriendsProfile';


let mapStateToProps = (state) => {
  return {
    frinedsData: state.frinedsPage.frinedsData,
  }
}

let mapDispatchToProps = (dispatch) => {
  return null
}

const FriendsProfileContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsProfile)

export default FriendsProfileContainer;