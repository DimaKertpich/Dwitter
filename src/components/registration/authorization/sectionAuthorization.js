import React, {useState} from 'react';

import './sectionAuthorization.scss';




function SectionAuthorization(){

    let [userName, setUserName] = useState(null);
    let [passwarod, setPassword] = useState(null);

    console.log(userName);
    console.log(passwarod);

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
                        <button className="authorization__btn-singIn" type="button">Sign In</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAuthorization;