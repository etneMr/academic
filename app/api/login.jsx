import { setCookie } from 'nookies';
import { apiAuth } from '@/services/axios/axoisRepo';

export default function handler(req, res) {
    // Check user credentials
    const submission = {
        username: req.body.username,
        password: req.body.password
    }
    const user = apiAuth.login(submission);
    if (!user) {
        res.status(401).send('Invalid credentials');
        return;
    }

    // Set authentication cookie
    setCookie({ res }, 'auth_token', user.auth_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    });

    // Redirect to dashboard page
    res.redirect('/');
}