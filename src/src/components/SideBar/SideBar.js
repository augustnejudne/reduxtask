import React, { Component } from 'react';
import User from "./User";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { deleteUser, checkAllUsers } from "../../store/actions/addActions";
import './SideBar.css';

class SideBar extends Component {
  render() {
    const { user, deleteUser, checkAllUsers, allUsersChecked } = this.props;
    return (
      <div className="SideBar">
        <ul className="UsersAll">
          <li>
            <label className="Label">
              <input type="checkbox" checked={allUsersChecked} onChange={() => checkAllUsers()}/>
              <span className="Checkmark"></span>
            </label>
            <span>All users</span>
            <i className="fas fa-trash-alt" style={{ marginRight: '10px' }} onClick={() => deleteUser(user)}></i>
          </li>
        </ul>
        <User />
      </div>
    )
  }
}

SideBar.propTypes = {
  deleteUser: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    user: state.user.users,
    allUsersChecked: state.user.allUsersChecked
  }
}

export default connect(mapStateToProps, { deleteUser, checkAllUsers })(SideBar);
