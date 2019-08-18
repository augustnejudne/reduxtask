import React, { Component } from 'react';
import './Header.css';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onToggleModal, addUser, nameChange, idChange, descChange } from "../../store/actions/addActions";

class Popup extends Component {

    render() {
        const { onToggleModal, addUser, name, id, Description, nameChange, idChange, descChange } = this.props;
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
                    <form onSubmit={e => {
                        e.preventDefault();
                        addUser({name,id,Description})
                    }}>
                        <div className="Details">
                            <label>Name</label>
                            <input type="text" required id="name" value={name ? name : ''} onChange={nameChange} />
                        </div>
                        <div className="Details">
                            <label>id</label>
                            <input type="text" required id="id" value={id ? id : ''} onChange={idChange} />
                        </div>
                        <div className="Details">
                            <label>Description</label>
                            <textarea required id="Description" value={Description ? Description : ''} onChange={descChange}></textarea>
                        </div>

                        <div className="PopupFooter">
                            <button className="Cancel" onClick={() => onToggleModal(false)}>
                                Cancel
                        </button>
                            <button className="Add" type="Submit" >Add User</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Popup.propTypes = {
    onToggleModal: PropTypes.func,
    addUser: PropTypes.func,
    nameChange: PropTypes.func,
    idChange: PropTypes.func,
    descChange: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        user: state.adduser,
        name: state.popup.nameValue,
        id: state.popup.idValue,
        Description: state.popup.descriptionValue
    }
}

export default connect(mapStateToProps, { onToggleModal, addUser, nameChange, idChange, descChange })(Popup);
