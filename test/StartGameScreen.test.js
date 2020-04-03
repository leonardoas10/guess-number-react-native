import React from 'react';
import renderer from 'react-test-renderer';

import StartGameScreen from '../screens/StartGameScreen';

describe('<StartGameScreen />', () => {
  it("it's have a property onStartGame", () => {
    const tree = renderer.create(<StartGameScreen onStartGame={10}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});