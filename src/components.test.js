import { Square, Board } from './components';
import renderer from 'react-test-renderer';
import React from 'react';

test('should show square', () => {
    expect.assertions(2);
    const tree = renderer.create(<Square value=""></Square>)
        .toJSON();
    const treex = renderer.create(<Square value="ABC"></Square>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    expect(treex).toMatchSnapshot();
});


it('should show Board', () => {
    const tree = renderer
      .create(<Board squares={Array(9).fill(null)}></Board>)
      .toJSON();
    
    expect(tree).toMatchSnapshot();
});