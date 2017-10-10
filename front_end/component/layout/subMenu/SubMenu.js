import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SubMenu extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div style={{width:'30px', height:'100%'}}>
                서브
            </div>
        )
    }
}

SubMenu.propTypes = {};

SubMenu.defaultProps = {};

export default SubMenu;