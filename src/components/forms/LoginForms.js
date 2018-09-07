import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { userLoggingIn } from '../../actions/auth';
import {connect} from "react-redux";

class LoginForms  extends React.Component {
  state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    }

    onChange = e => {
        this.setState({
            data: {...this.state.data, [e.target.name]:[e.target.value]}
        })
    }

    onSubmit = e => {
    const errors = this.validate(this.state.data);
        this.setState({
            errors
        })
        this.props.submit();
    }

    validate = (data) => {
        const errors = {};
        if (!data.password) errors.password = "Cant't be blank.";
        return errors;
    }

    render() {
      const data = this.state;
      return (
        <Form onSubmit={this.onSubmit}>
            <Form.Field>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" value={data.email} onChange={this.onChange} />
            </Form.Field>
            <Form.Field>
                <label htmlFor="password">password</label>
                <input type="password" name="password" id="password" value={data.password} onChange={this.onChange} />
            </Form.Field>
            <Button type="submit" primary>Login</Button>
        </Form>
    );
  }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    };
}

export default connect(mapStateToProps, {submit : userLoggingIn})(LoginForms);
