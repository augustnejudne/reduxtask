import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { selectUser, checkUser, uncheckUser } from "../../store/actions/addActions";

class User extends Component {
    render() {
        const { users, checkedUsers, selectUser, checkUser, uncheckUser } = this.props;
        return (
            <ul className="User">
                {users.map((user, index) => {
                    return <li key={index}>
                        <label className="Label">
                            <input type="checkbox" checked={checkedUsers.includes(user)} onChange={() => checkedUsers.includes(user) ? uncheckUser(user) : checkUser(user) }/>
                            <span className="Checkmark"></span>
                        </label>
                        <span onClick={() => selectUser(user)}>{user.name}</span>
                    </li>
                })}
            </ul>
        )
    }
}

User.propTypes = {
    selectUser: PropTypes.func,
};


const mapStateToProps = (state) => {
    return {
        users: state.user.users,
        checkedUsers: state.user.checkedUsers
    }
}

export default connect(mapStateToProps, { selectUser, checkUser, uncheckUser })(User);