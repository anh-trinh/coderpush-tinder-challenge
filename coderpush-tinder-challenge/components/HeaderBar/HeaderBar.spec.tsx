import React from 'react';
import { render } from '@testing-library/react';
import HeaderBar from './HeaderBar';
import {
    DISCOVER_HREF,
    LIKE_HREF,
    MATCH_HREF,
    PASS_HREF
} from '../../constants/RouteConstants';

describe('HeaderBar', () => {
    it('should display all navigation links', () => {
        // given
        const { getByTestId } = render(<HeaderBar />);
        // then
        expect(getByTestId('discover_link')).toHaveAttribute('href', DISCOVER_HREF);
        expect(getByTestId('liked_link')).toHaveAttribute('href', LIKE_HREF);
        expect(getByTestId('passed_link')).toHaveAttribute('href', PASS_HREF);
        expect(getByTestId('match_link')).toHaveAttribute('href', MATCH_HREF);
    });
});
