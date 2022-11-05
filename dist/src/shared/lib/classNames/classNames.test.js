import { classNames } from './classNames';
describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('some-class')).toBe('some-class');
    });
    test('with additional class', function () {
        var expected = 'some-class class1 class2';
        expect(classNames('some-class', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods', function () {
        var expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true }, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods false', function () {
        var expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods undefined', function () {
        var expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['class1', 'class2'])).toBe(expected);
    });
});
