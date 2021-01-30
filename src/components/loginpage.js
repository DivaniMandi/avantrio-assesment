import React from 'react';
import PropTypes from 'prop-types';
import './loginpage.css';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

//Redux components
import { connect } from 'react-redux';
import { login } from '../redux/actions/userActions';



class Loginpage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            allusers:[]

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            const userData = {
                username: this.state.username,
                password: this.state.password,
            };
            this.props.login(userData, this.props.history);         
        }

        this.setState({allusers:this.props.user});
        console.log(this.state.allusers);

    }

    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
            <Container className="container">
                <h2>Login</h2>
                <Form name="form" onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text"
                                className="form-control"
                                name="username"
                                value={username}
                                onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block" style={{ color: 'red' }}>Username is required</div>
                            }
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block" style={{ color: 'red' }}>Password is required</div>
                            }
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Button className="btn btn-primary" color="danger" onClick={this.handleSubmit}>Login</Button>
                            {loggingIn}
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );

    }
}

Loginpage.propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = { login };

export default connect(mapStateToProps, mapActionsToProps)(Loginpage);