/**
 * Testing our Button component
 */
import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import Panel from '../index';

const children = (<span>Test</span>);

const renderComponent = (props = {}) => mount(
  <Panel {...props} />
);


const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider>
    <Panel {...props} />
  </BootstrapProvider>
);


describe('<Panel />', () => {
  it('should render an <Panel> tag without a theme', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('DrawerUnstyled').length).toBe(1);
  });
  it('should render a <Panel> tag with a theme', () => {
    const renderedComponent = renderComponentUsingTheme();
    expect(renderedComponent.find('Drawer').length).toBe(1);
  });
  it('should have drawer-top class', () => {
    const renderedComponent = renderComponentUsingTheme({
      top: '260px',
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-top')).toBe(true);
    expect(renderedComponent.find('Drawer').props().top).toEqual('260px');
  });
  it('should have drawer-right class', () => {
    const renderedComponent = renderComponentUsingTheme({
      right: '260px',
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-right')).toBe(true);
    expect(renderedComponent.find('Drawer').props().right).toEqual('260px');
  });
  it('should have drawer-bottom class', () => {
    const renderedComponent = renderComponentUsingTheme({
      bottom: '260px',
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-bottom')).toBe(true);
    expect(renderedComponent.find('Drawer').props().bottom).toEqual('260px');
  });
  it('should have drawer-left class', () => {
    const renderedComponent = renderComponentUsingTheme({
      left: '260px',
    });
    expect(renderedComponent.find('div').at(1).hasClass('drawer-left')).toBe(true);
    expect(renderedComponent.find('Drawer').props().left).toEqual('260px');
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
