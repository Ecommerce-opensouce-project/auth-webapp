import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import LoginForm from "./LoginForm";

const wrapper = shallow(<LoginForm/>);

describe("Test Login form", ()=>{
    it("match with snapshot", ()=>{
        const tree = renderer.create(<LoginForm/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
    it("renders loginform", ()=>{
        const nameField = wrapper.find('.login-name');
        const passField = wrapper.find('.login-password');
        expect(nameField.exists()).toBe(true);
        expect(passField.exists()).toBe(true);
    })
});
