import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import PropTypes from 'prop-types';
import { Wrapper } from './UserList.styles';

const UsersList = () => (
  <Wrapper>
    <ul>
      {users.map((userData) => (
        <UsersListItem userData={userData} />
      ))}
    </ul>
  </Wrapper>
);

UsersList.propTypes = {};

export default UsersList;
