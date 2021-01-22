import { connect } from 'react-redux';
import { navigate } from '../../model/NavActions';
import NavbarComponent from './NavbarComponent';

const mapStateToProps = ({ nav }) => {
    return {
        routes: nav.routes,
        selectedIndex: nav.selectedIndex
    };
};

export default connect(mapStateToProps, { navigate })(NavbarComponent);
