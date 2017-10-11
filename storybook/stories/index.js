import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from './Button';
import TripCard from './TripCard';
import CenterView from './CenterView';
import Welcome from './Welcome';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('TripCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('to Storybook', () => <TripCard />);

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={() => console.log("debug")}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={() => console.log("debug", action('clicked-emoji'))}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
