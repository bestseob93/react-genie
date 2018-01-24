import React from 'react';

// import Logo from './Logo';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Logo', module).add('with Logo', () => <div>Logo</div>);

storiesOf('Hi', module).add('to hi', () => <div>h1</div>);