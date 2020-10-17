import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import FormText from '../FormText';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <FormText {...props}>
    {children}
  </FormText>
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <FormText {...props}>
      {children}
    </FormText>
  </BootstrapProvider>
);

describe('<FormText />', () => {
  it('should render an <FormText> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('small').length).toBe(1);
  });
  it('should have children without a theme', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should render an <FormText> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('FormText').length).toBe(1);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have a class text-info', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      color: 'success',
    });
    expect(renderedComponent.find('small').hasClass('text-success')).toBe(true);
  });
  it('should NOT have a class form-text', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      inline: true,
    });
    expect(renderedComponent.find('small').hasClass('form-text')).toBe(false);
  });
});
