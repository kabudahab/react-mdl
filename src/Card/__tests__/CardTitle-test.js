/* eslint-env mocha */
import expect from 'expect';
import React from 'react';
import { render } from '../../__tests__/render';
import { CardTitle } from '../';

describe('Card', () => {
    describe('CardTitle', () => {
        it('should render a div with the title css class', () => {
            const output = render(<CardTitle />);

            expect(output.type).toBe('div');
            expect(output.props.className).toInclude('mdl-card__title');
        });

        it('should allow custom css classes', () => {
            const output = render(<CardTitle className="my-title" />);

            expect(output.props.className)
                .toInclude('mdl-card__title')
                .toInclude('my-title');
        });

        it('should not expand by default', () => {
            const output = render(<CardTitle />);

            expect(output.props.className)
                .toExclude('mdl-card--expand');
        });

        it('should expand when specified', () => {
            const output = render(<CardTitle expand />);

            expect(output.props.className)
                .toInclude('mdl-card--expand');
        });

        it('should render the title in the specific container by default', () => {
            const output = render(<CardTitle>My Title</CardTitle>);

            const titleContainer = output.props.children;
            expect(titleContainer.type).toBe('h2');
            expect(titleContainer.props.className).toBe('mdl-card__title-text');
            expect(titleContainer.props.children).toBe('My Title');
        });

        it('should render custom complex title', () => {
            const output = render(<CardTitle><h4>My Title</h4></CardTitle>);

            const titleContainer = output.props.children;
            expect(titleContainer).toEqual(<h4>My Title</h4>);
        });
    });
});
