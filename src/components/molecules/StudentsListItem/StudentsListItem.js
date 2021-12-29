import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { StyledInfo, Wrapper } from './StudentsListItem.styles';
import { Average } from 'components/atoms/Average/Average';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' }, ...props }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper {...props}>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};
// UsersListItem.propTypes = {
//   userData: PropTypes.shape({
//     average: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     attendance: PropTypes.string,
//   }),
// };

export default UsersListItem;
