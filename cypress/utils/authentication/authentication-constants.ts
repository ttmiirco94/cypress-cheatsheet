export abstract class AuthenticationConstants {
    public static Selectors = {
        Login: {
            USERNAME: 'input#loginusername',
            PASSWORD: 'input#loginpassword',
            BUTTON_LOGIN: 'a#login2',
            BUTTON_SEND_LOGIN: 'div#logInModal > div[role=\'document\'] .btn.btn-primary',
            BUTTON_LOGOUT: 'a#logout2'
        }
    }
}