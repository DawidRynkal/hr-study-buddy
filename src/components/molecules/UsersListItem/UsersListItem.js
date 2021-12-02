import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './UserListItem.styles';
import Button from 'components/atoms/Button/Button';
import { StyledAverage, StyledInfo } from 'components/organisms/UsersList/UserList.styles';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <StyledAverage value={average}>{average}</StyledAverage>
    <StyledInfo>
      <p>
        {name}
        <Button />
      </p>
      <p>attendance: {attendance}</p>
    </StyledInfo>
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
