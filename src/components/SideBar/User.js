import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { selectUser } from "../../store/actions/addActions";

class User extends Component {
    render() {
        const { users, selectUser } = this.props;
        return (
            <ul className="User">
                {users.map((user) => {
                    return <li key={user.id}>
                        <label className="Label">
                            <input type="checkbox" />
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
    }
}

export default connect(mapStateToProps, { selectUser })(User);