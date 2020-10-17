/**
 * Testing our Sup component
 */
import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';

import Sup from '../index';

const children = 'Test';

const renderComponent = (props = {}) => mount(
  <Sup {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Sup {...props} />
  </BootstrapProvider>
);


describe('<Sup />', () => {
  it('should render an <Sup> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
  it('should render a <sup> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('sup').length).toBe(1);
  });
});
