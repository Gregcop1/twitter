import { connect } from 'react-redux';

const mapStateToProps = ({ tweets }) => ({ user: tweets.author });

export default connect(mapStateToProps);
