import { render, screen } from '@testing-library/react';

import Main from './index';

describe('Main Component', () => {
  it('should be able to render the main component', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', { name: /React Next.js Boilerplate/i }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should be able to render colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b',
    });
  });
});
