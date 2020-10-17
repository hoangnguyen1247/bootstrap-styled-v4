import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import FormFeedback from '../FormFeedback';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <FormFeedback {...props}>
    {children}
  </FormFeedback>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormFeedback {...props}>
      {children}
    </FormFeedback>
  </BootstrapProvider>
);

describe('<FormFeedback />', () => {
  it('should render an <FormFeedback> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('div').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormFeedback> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormFeedback').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
