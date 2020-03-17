import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  backgrounds: [
    { name: 'Default theme', value: '#fff', default: true },
    { name: 'Dark theme', value: '#050449' },
  ],
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
