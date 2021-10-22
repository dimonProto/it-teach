import React from "react";
import { Field, Form  } from 'react-final-form'
import {Input} from "../common/FormControls/FormsConrols";
import {composeValidators, maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";



const LoginForm = (props) => {

    return (
        <Form onSubmit={props.onSubmit} >
            {props => {
            return  <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        name="email"
                        placeholder="email"
                        component={Input}
                        type="text"
                        validate={composeValidators(required, maxLengthCreator(50))}
                    />
                </div>
                <div>
                    <Field
                        name="password"
                        placeholder="password"
                        component={Input}
                        type="password"
                        validate={composeValidators(required, maxLengthCreator(50))}
                    />
                </div>
                <div>
                    <Field name="rememberMe" component={Input} type="checkbox" />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
            }}
        </Form>
    )

}


const Login = ({login,isAuth,errors}) => {

    const onSubmit = (formData) => login(formData.email,formData.password,formData.rememberMe)

    if(isAuth){
      return  <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>

            {errors.map((el) => (
                <div>{el}</div>
            ))}
        </div>
    )

}

 const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
     errors: state.auth.errors
 })

export default connect(mapStateToProps, {login})(Login)