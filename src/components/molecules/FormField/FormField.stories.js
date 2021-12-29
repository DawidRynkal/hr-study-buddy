import FormField from './FormField';

export default {
  title: 'Components/molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField id="formStory" name="formStory" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'login',
};
