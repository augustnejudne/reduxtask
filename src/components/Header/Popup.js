import React, { Component } from 'react';
import './Header.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onToggleModal, addUser } from "../../store/actions/addActions";

class Popup extends Component {

    render() {
        const { onToggleModal, addUser, user } = this.props;
        return (
            <div className="Popup">
                <div className="PopupInner">
                    <div className="PopupHeader">
                        <div className="UserAvatar">
                            <i className="far fa-user"></i>
                        </div>
                        <div className="PopupClose" onClick={() => onToggleModal(false)}>
                            &times;
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(props => this.onSubmit(props))}>
                        <div className="Details">
                            <label>Name</label>
                            <input type="text" required name="name" onChange={(e) => this.handleChange(e, 'name')} />
                        </div>
                        <div className="Details">
                            <label>id</label>
                            <input type="text" required name="id" onChange={(e) => this.handleChange(e, 'id')} />
                        </div>
                        <div className="Details">
                            <label>Description</label>
                            <textarea required name="Description" onChange={(e) => this.handleChange(e, 'Description')}></textarea>
                        </div>

                        <div className="PopupFooter">
                            <button className="Cancel">
                                Cancel
                        </button>
                            <button className="Add" type="Submit">Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Popup.propTypes = {
    onToggleModal: PropTypes.func,
    addUser: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        user: state.adduser
    }
}

export default connect(mapStateToProps, { onToggleModal, addUser })(Popup);
