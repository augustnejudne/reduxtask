import React, { Component } from 'react';
import User from "./User";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { deleteUser } from "../../store/actions/addActions";
import './SideBar.css';

class SideBar extends Component {
  render() {
    const { user, deleteUser } = this.props;
    return (
      <div className="SideBar">
        <ul className="UsersAll">
          <li>
            <label className="Label">
              <input type="checkbox" />
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
    user: state.user.users
  }
}

export default connect(mapStateToProps, { deleteUser })(SideBar);
