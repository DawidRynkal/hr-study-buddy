import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';
import { useParams } from 'react-router-dom';

const StudentsList = ({ handleOpenStudent }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents([]);

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem onClick={() => handleOpenStudent(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default StudentsList;
