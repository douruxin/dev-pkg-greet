import { greet } from '..';

test('greet function should return correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
