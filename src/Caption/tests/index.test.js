/**
 * Testing our Caption component
 */
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';

import { mount } from 'enzyme';
import React from 'react';


import Caption from '../index';

const children = <span>Test</span>;

const renderComponent = (props = {}) => mount(
  <table>
    <Caption {...props} />
  </table>
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <table>
      <Caption {...props} />
    </table>
  </BootstrapProvider>
);


describe('<Caption />', () => {
  it('should render an <Caption> tag without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('caption').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render a <caption> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.find('caption').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
