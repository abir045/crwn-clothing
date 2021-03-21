import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';
//import './auth.scss';

import {AuthPageContainer} from './auth.styles';


const AuthPage = ( ) => (
    <AuthPageContainer>
        <SignIn />
        <SignUp/>

    </AuthPageContainer>
)

export default AuthPage;