import { render, screen } from '@testing-library/react';
import Home from '../pages/index';


describe('tests for <Home />', () => {
  it('should test index page', () => {
    render(<Home />)

    screen.debug()
  });
});