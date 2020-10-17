/* eslint-disable */
/**
 * Testing our Collapse component
 */

import { mount } from 'enzyme';
import React from 'react';
import BootstrapProvider from 'bt-styled-provider/lib/BootstrapProvider';
import Collapse from '../index';
import { makeTheme } from 'bootstrap-styled/lib/theme';

const children = (<h1>Test</h1>);

const renderComponent = (props = {}) => mount(
  <Collapse {...props} />
);

const renderComponentUsingTheme = (props = {}) => mount(
  <BootstrapProvider theme={props.theme}>
    <Collapse {...props} />
  </BootstrapProvider>
);

describe('<Collapse />', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: true,
      theme: makeTheme({
        '$enable-transitions': false,
      }),
    });
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should have children with a theme', () => {
    const renderedComponent = renderComponentUsingTheme({
      children,
      isOpen: false,
      theme: makeTheme({
        '$enable-transitions': true,
      }),
    });
    expect(renderedComponent.length).toBe(1);
  });
  it('if state is SHOW should have className collapsing', () => {
    const renderedComponent = renderComponent({
      children,
    });
    renderedComponent.find('Collapse').at(1).setState({ collapse: 'SHOW' });
    expect(renderedComponent.find('div').hasClass('collapsing')).toBe(true)
  });
  it('if state is SHOWN should have className collapse show', () => {
    const renderedComponent = renderComponent({
      children,
    });
    renderedComponent.find('Collapse').at(1).setState({ collapse: 'SHOWN' });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true)
    expect(renderedComponent.find('div').hasClass('show')).toBe(true)
  });
  it('if state is HIDE should have className collapsing', () => {
    const renderedComponent = renderComponent({
      children,
    });
    renderedComponent.find('Collapse').at(1).setState({ collapse: 'HIDE' });
    expect(renderedComponent.find('div').hasClass('collapsing')).toBe(true)
  });
  it('if state is HIDDEN should have className collapse', () => {
    const renderedComponent = renderComponent({
      children,
    });
    renderedComponent.find('Collapse').at(1).setState({ collapse: 'HIDDEN' });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true)
  });
  it('should have className collapse by default', () => {
    const renderedComponent = renderComponent({
      children,
    });
    expect(renderedComponent.find('div').hasClass('collapse')).toBe(true)
  });
  it('should have className navbar-collapse', () => {
    const renderedComponent = renderComponent({
      children,
      navbar: true,
    });
    expect(renderedComponent.find('div').hasClass('navbar-collapse')).toBe(true)
  });
  // it('should have height to be 0', () => {
  //   const renderedComponent = renderComponent({
  //     children,
  //   });
  //   renderedComponent.setProps({ isOpen: true });
  //   renderedComponent.setState({ collapse: 'HIDDEN' });
  //   expect(renderedComponent.state().height).toBe(0);
  // });
  it('should render children', () => {
    const renderedComponent = mount(<Collapse><p>hello</p></Collapse>).find('p');
    expect(renderedComponent.text()).toBe('hello');
  });

  it('should have default isOpen value', () => {
    const renderedComponent = mount(<Collapse />);
    expect(renderedComponent.find('Collapse').at(1).instance().props.isOpen).toEqual(false);
  });

  it('should render with class "collapse"', () => {
    const renderedComponent = mount(<Collapse />);
    expect(renderedComponent.find('div').hasClass('collapse')).toEqual(true);
  });

  it('should render with class "navbar"', () => {
    const renderedComponent = mount(<Collapse navbar />);
    expect(renderedComponent.find('div').hasClass('navbar-collapse')).toEqual(true);
  });

  it('should render with class "show" when isOpen is true', () => {
    isOpen = true;
    const renderedComponent = mount(<Collapse isOpen={isOpen} />);
    expect(renderedComponent.find('div').hasClass('show')).toEqual(true);
  });

  // it('should set height to null when isOpen is true', () => {
  //   isOpen = true;
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   expect(renderedComponent.state('height')).toBe(null);
  // });
  //
  // it('should not set height when isOpen is false', () => {
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   expect(renderedComponent.state('height')).toBe(null);
  // });
  // it('should change state with { collapse: ${state} } when isOpen change to true before transition', () => {
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   toggle();
  //   renderedComponent.setProps({ isOpen: isOpen });
  //   expect(renderedComponent.state('collapse')).toEqual('SHOW');
  //   renderedComponent.unmount();
  // });
  // it('should change state with { collapse: ${state} } when isOpen change to false before transition', () => {
  //   isOpen = true;
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   toggle();
  //   renderedComponent.setProps({ isOpen: isOpen });
  //   expect(renderedComponent.state('collapse')).toEqual('HIDE');
  //   renderedComponent.unmount();
  // });
  // it('should set inline style to 0 when isOpen change to false', () => {
  //   isOpen = true;
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   toggle();
  //   renderedComponent.setProps({ isOpen: isOpen });
  //   renderedComponent.unmount();
  // });
  // it('should remove timeout tag after unmount', () => {
  //   spyOn(Collapse.prototype, 'componentWillUnmount').and.callThrough();
  //   const renderedComponent = mount(<Collapse isOpen={isOpen} />);
  //   renderedComponent.unmount();
  //   expect(Collapse.prototype.componentWillUnmount).toHaveBeenCalled();
  // });
});
