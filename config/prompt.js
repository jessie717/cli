export const prompts = [
  {
    type: 'input',
    name: 'name',
    message: '项目名称',
    default: 'cowin-demo',
  },
  {
    type: 'list',
    name: 'frame',
    message: '模板类型',
    default: 'vue3',
    choices: [
      // { name: 'vue2', value: 'vue2' },
      { name: 'vue3', value: 'vue3' },
      { name: 'react', value: 'react' },
    ],
  },
  {
    type: 'checkbox',
    name: 'plugins',
    message: '插件选择',
    choices: [
      { name: 'babel', value: 'babel' },
      { name: 'eslint', value: 'eslint' },
      { name: 'vue-router', value: 'vue-router' },
    ],
  },
  {
    type: 'confirm',
    name: 'confirm',
    message: 'confirm',
  },
]
