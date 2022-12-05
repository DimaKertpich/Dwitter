import '../registration/sectionRegistration.scss';

function SectionRegistration(){

    return(
        <section className="registration">
            <div className="registration__wrapper">
                <div className="registration__data">
                    <div className="registration__data-user">
                        <h4>User Name</h4>
                        <p>your dwitt</p>
                    </div>
                    <div className="registration__data-auth">
                        <button className="registration__data-auth-login" type="button">Login</button>
                        <button className="registration__data-auth-registr" type="button">Registration</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionRegistration;