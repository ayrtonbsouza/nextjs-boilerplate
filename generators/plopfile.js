module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application controller',

    // inquirer prompts
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.spec.tsx',
        templateFile: 'templates/index.spec.tsx.hbs',
      },
    ],
  });
};
