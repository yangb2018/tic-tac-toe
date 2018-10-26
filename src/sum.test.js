const sum = require('./sum');

beforeEach(() => {
    console.log('starting test');
});

beforeAll(() => {
    
});

test('add 1+2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('add 2+2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
});

test('add 2-1 to equal 1', () => {
    expect(sum(2, -1)).toBe(1);
});

test('testing Primise', async () => {
    expect.assertions(1);

    const mock = jest.fn();
    mock.mockReturnValueOnce(1).mockReturnValueOnce('aa');
    let pa = new Promise(r => { r(mock()); });

    let pb = pa.then(x =>{
        throw 'aa';
        return x += 1;
    } ).catch(x => mock());

    let oo = await pb;
    console.log(oo);
    expect(oo).toBe('aa');
});


