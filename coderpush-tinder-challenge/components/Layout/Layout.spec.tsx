import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
    it('should display title and children', () => {
        // given
        const { asFragment } = render(<Layout children={<div>Children Test</div>} title="Title Test" />);
        // then
        expect(asFragment()).toMatchSnapshot();
    });
});
