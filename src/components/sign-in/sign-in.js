import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           email: '',
           password: ''
       }
   }

   handSubmit = event =>{
       event.preventDefault();
        this.setState({email: '', password: ''})
   }

   handChange = event =>{
       const {value, name} = event.target;
       this.setState({ [name]: value})
   }

   render() {
       return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handChange = {this.handChange}
                    value={this.state.email} 
                    label='email'
                    required 
                    />
        
                    <FormInput 
                    name="password" 
                    type="password" 
                    handChange = {this.handChange}
                    value={this.state.password} 
                    label="password"
                    required 
                    />

                   <div className='buttons'>
                    <CustomButton type='submit'> Sign In </CustomButton>
                     <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                       Sign in with Google
                     </CustomButton>
                     </div>
                </form>
            </div>
       );
   }
}

export default SignIn