import * as React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {StoryScreen, Story, UseCase} from '../../../storybook/views';
import {Button} from './button';

const buttonStyleArray = [{paddingVertical: 100}, {borderRadius: 0}];

const buttonTextStyleArray = [{fontSize: 20}, {color: '#a511dc'}];

storiesOf('Button', module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add('Style Presets', () => (
    <Story>
      <UseCase text="Primary" usage="The primary button.">
        <Button
          text="Click It"
          preset="primary"
          onPress={() => Alert.alert('pressed')}
        />
      </UseCase>
      <UseCase
        text="Disabled"
        usage="The disabled behaviour of the primary button.">
        <Button
          text="Click It"
          preset="primary"
          onPress={() => Alert.alert('pressed')}
          disabled
        />
      </UseCase>
      <UseCase text="Array Style" usage="Button with array style">
        <Button
          text="Click It"
          preset="primary"
          onPress={() => Alert.alert('pressed')}
          style={buttonStyleArray}
          textStyle={buttonTextStyleArray}
        />
      </UseCase>
    </Story>
  ));
