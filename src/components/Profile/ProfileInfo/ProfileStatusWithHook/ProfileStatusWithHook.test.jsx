import {create} from 'react-test-renderer';
import {ProfileStatusWithHook} from './ProfileStatusWithHook';
import {ProfileStatus} from './ProfileStatus';

describe('Profile status component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'str'} updateStatusTC={() => {
        }}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('str');
    });
    test('after creation span should be displayed', () => {
        const component = create(<ProfileStatus status={'str'} updateStatusTC={() => {
        }}/>);
        const instance = component.root;
        let span = instance.findAllByType('span');
        expect(span.length).toBe(1);

    });
    test('after  creation input should be undefined', () => {
        const component = create(<ProfileStatus status={'str'} updateStatusTC={() => {
        }}/>);
        const instance = component.root;
        let input = instance.findAllByType('input');
        expect(input).toEqual([]);
    });
    test('input should be', () => {
        const component = create(<ProfileStatus status={'str'} updateStatusTC={() => {
        }}/>);
        const instance = component.root;
        let span = instance.findAllByType('span');
        span[0].props.onDoubleClick()
        let input = instance.findAllByType('input');
        expect(input.length).toBe(1);
    });
    test('callback should be called', () => {
        const mockCallback=jest.fn()
        const component = create(<ProfileStatus status={'str'} updateStatusTC={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
                expect(mockCallback.mock.calls.length).toBe(1);
    });
});