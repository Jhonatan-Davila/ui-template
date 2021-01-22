import { connect } from 'react-redux';
import { navigate } from '../../model/NavActions';
import LogoComponent from './LogoComponent';

const mapStateToProps = ({ nav }) => {
    return {
        selectedIndex: nav.selectedIndex
    };
};

export default connect(mapStateToProps, { navigate })(LogoComponent);
