import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { activeRegistr } from '../../../store/jointSlice';
import './sectionRegistration.scss';

function Registration(){

    let [userName, setUserName] = useState(null);
    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    
    const dispatch = useDispatch();
    const changeRegistr = () => dispatch(activeRegistr(false))

    function postRegist(){ 

        fetch('http://localhost:9090/api/auth/regist',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "username": userName,
                "email": email,
                "password": password
            })
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
        
    }

    return(
        <section className="registration">
            <div className="registration__signUp">
                <div className="registration__signUp-wrapper">
                    <div className="registration__signUp-title">
                        <h4>Registration</h4>
                    </div>
                    <div className="registration__signUp-name">
                        <label>Username</label>
                        <input type="text" onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div className="registration__signUp-email">
                        <label>Email</label>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="registration__signUp-password">
                        <label>Password</label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="registration__signUp-repeatPassword">
                        <label>Repeat the password</label>
                        <input type="text"></input>
                    </div>

                    <div className="registration__btn">
                        <button className="registration__btn-later" type="button" onClick={changeRegistr}>Later</button>
                        <button className="registration__btn-singUp" type="button" onClick={postRegist} >Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registration;