import { Square, Board, calculateWinner, Game } from './components';
import renderer from 'react-test-renderer';
import React from 'react';
import { shallow, mount } from 'enzyme';

test('should show square with correct content', () => {
    expect.assertions(2);
    const tree = renderer.create(<Square value=""></Square>)
        .toJSON();
    const treex = renderer.create(<Square value="ABC"></Square>)
        .toJSON();

    expect(tree).toMatchSnapshot();
    expect(treex).toMatchSnapshot();
});

it('square should clickable', () => {
    const mockClickCallback = jest.fn();
    const button = shallow(
        <Square onClickMe={mockClickCallback} value='X'></Square>
    );
    var btnHtmls = button.find('button');
    expect(btnHtmls.length).toBe(1);
    btnHtmls.simulate('click');
    btnHtmls.simulate('click');
    expect(mockClickCallback.mock.calls.length).toBe(2);
});


it('should show Board with 9 squares', () => {

    const node = <Board squares={Array(9).fill(null)}></Board>;
    const button = shallow(node);
    var btnHtmls = button.find(Square);
    expect(btnHtmls.length).toBe(9);

    const tree = renderer
        .create(node)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('test algorithm of calculateWinner', () => {
    const mockf = jest.fn();

    mockf.mockReturnValueOnce(['X', 'x', 'X'])
        .mockReturnValueOnce(['O', 'O', 'O'])
        .mockReturnValueOnce(['O', 'o', 'O'])
        .mockReturnValue([]);

    expect(calculateWinner(mockf())).toBeNull();
    expect(calculateWinner(mockf())).toBe('O');
    expect(calculateWinner(mockf())).toBeNull();
});


it('shoud have Text X/O after click ', () => {
    const com = mount(<Game></Game>);
    var squareHtmls = com.find('div.game-board button');
    
    expect(squareHtmls.length).toBe(9);

    var firstcell = squareHtmls.first();
    expect(firstcell.text()).toEqual('');
    firstcell.simulate('click');
    expect(firstcell.text()).toBe('X');



    var thirdcell = squareHtmls.at(2);
    expect(thirdcell.text()).toEqual('');
    thirdcell.simulate('click');
    expect(thirdcell.text()).toBe('O');
});