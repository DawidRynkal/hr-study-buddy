import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'Components/Molecules/StudentDetails/StudentDetails',
  component: StudentDetails,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '1',
        name: 'Adam Romański',
        attendance: '39%',
        average: '2.3',
        group: 'A',
        course: 'Business',
        grades: [
          {
            subject: 'Buisness',
            average: '3.4',
          },
          {
            subject: 'Marketing',
            average: '4.4',
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
