import GoogleLogin from 'react-google-login';
import Button from '../ui/Button';
import { Context } from '../../Contexts/userContext';
import { useContext } from 'react';
import { useHistory } from 'react-router';

export default function GoogleOAuth({...props }) {
    const user = useContext(Context);
    const history = useHistory();
    const SuccessLoginHandler = (res) => {
        localStorage.setItem('googleLogin', JSON.stringify(res.profileObj));
        const profile = {...res.profileObj };
        console.log(profile);
        user.Login(profile);
        history.push('/dashboard');
    };
    const FailureLoginHandler = (err) => {
        console.log(err);
    };
    return ( <div {...props }>
        <GoogleLogin clientId = '794300093186-evtkr9vjk60bd8vmt7jm617fdpess4oa.apps.googleusercontent.com'
        buttonText = 'Sign In Using Google'
        render = {
            (renderProps) => {
                return ( <Button onClick = { renderProps.onClick }
                    btnType = 'primary' {...props } >
                    Sign In Using Google </Button>
                );
            }
        }
        onSuccess = { SuccessLoginHandler }
        onFailure = { FailureLoginHandler }
        cookiePolicy = { 'single_host_origin' }/> </div>
    );
}