import MainButton from './MainButton'

export default {
  title: 'common/button/MainButton',
  component: MainButton,
}

const Template = (args) => <MainButton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary Button clicked!'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: 'Secondary Button',
  onClick: () => alert('Secondary Button clicked!'),
}
