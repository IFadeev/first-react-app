import {connect} from 'react-redux';
import Friends from './Friends';



  const mapStateToProps = (state) => {
    return {
      frinedsPage: state.frinedsPage.frinedsData
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return null
  }

  const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(Friends)
  export default FriendsContainer;