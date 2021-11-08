import * as React from 'react';
import { shallow } from "enzyme";
import * as renderer from 'react-test-renderer';
import App  from "./App";
import LoginForm from './login/LoginForm';

const wrapper = shallow(<App/>);

describe('Test Auth Webapp entry', function () {
    it('test againest snapshot', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should have a header tag with Welcome', function () {
        expect(wrapper.find(".card-header").text()).toEqual("Welcome");
    });
    it('should include loginform by default', function () {
        expect(wrapper.find(LoginForm).exists()).toBe(true);
    });
});