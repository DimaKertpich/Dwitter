import React, {useState} from 'react';

import './sectionAuthorization.scss';




function SectionAuthorization(){

    let [userName, setUserName] = useState(null);
    let [passwarod, setPassword] = useState(null);

    function postLogin() {
        fetch('http://localhost:9090/api/messages', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "username": userName,
                                    "password": passwarod })
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }

    // function PostData() {
    //     fetch('http://localhost:9090/api/users', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ "username": "new1111",
    //                                 "email":"email111@gmail.com",
    //                                 "password":"password",
    //                                 "biography":"bio" })
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(JSON.stringify(response)))
    // }

    return(
        <section className="authorization">
            <div className="authorization__signIn">
                <div className="authorization__signIn-wrapper">
                    <div className="authorization__signIn-title">
                        <h4>Login</h4>
                    </div>
                    <div className="authorization__signIn-name">
                        <label>Username</label>
                        <input  type="text" onChange={(e) => setUserName(e.target.value)}></input>
                    </div>
                    <div className="authorization__signIn-password">
                        <label>Password</label>
                        <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
                    </div>


                    <div className="authorization__btn">
                        <button className="authorization__btn-later" type="button">Later</button>
                        <button className="authorization__btn-singIn" type="button" onClick={postLogin}>Sign In</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAuthorization;