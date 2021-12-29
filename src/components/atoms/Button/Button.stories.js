import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Click</Button>;

export const Default = Template.bind({});

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
