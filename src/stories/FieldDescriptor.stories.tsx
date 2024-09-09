import { StoryFn, Meta } from '@storybook/react';
import FieldDescriptor, { FieldDescriptorProps } from '../Components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
} as Meta;

const Template: StoryFn<FieldDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  field: 'Data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}