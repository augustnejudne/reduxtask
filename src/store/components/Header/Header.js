import React, { Component } from 'react';
import './Header.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Popup from './Popup';
import { onToggleModal } from "../../store/actions/addActions";

class Header extends Component {

    render() {
        const { onToggleModal, show } = this.props;
        return (
            <header className="Header">
                <div className="Container">
                    <button className="AddUserBtn" onClick={() => onToggleModal(true)}>
                        <i className="Icon">+</i>
                    </button>
                </div>
                {show ? <Popup /> : null}
            </header>
        )
    }
}

Header.propTypes = {
    onToggleModal: PropTypes.func,
    show: PropTypes.bool
};


const mapStateToProps = state => {
    return {
        show: state.popup.show
    }
};


export default connect(mapStateToProps, { onToggleModal })(Header);
