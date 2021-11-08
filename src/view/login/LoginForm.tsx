import * as React from "react";
import { Button } from 'ecommerce-opensouce-storybook'

const LoginForm = () => <div>
    <div className="login-name">Name</div>
    <div className="login-password">Password</div>
    <Button label="Login"/>
    <Button label="Register"/>
</div>


export default LoginForm;