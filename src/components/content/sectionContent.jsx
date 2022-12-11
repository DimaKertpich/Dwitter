import Navigation from '../navigation/sectionNavigation.js';
import MenuRegistration from '../menuRegistration/sectionMenuRegistration.jsx';
import '../content/sectionContent.scss';
import user from '../../assets/image/content/man.png';
import emoji from '../../assets/image/content/happiness.png';
import image from '../../assets/image/content/image.png'

function SectionContent(){
    return(
        <section className="content">
            <div className="container">

                <Navigation></Navigation>
                <MenuRegistration></MenuRegistration>

                <div className="content__wrapper">
                    <div className="content__dwitt">
                        <div className="content__dwitt-title">
                            <h4>Create Dwitt</h4>
                        </div>
                        <div className="content__dwitt-post">
                            <div className="content__dwitt-post-user">
                                <img src={user} alt="user"></img>
                            </div>

                            <div className="content__dwitt-post-test">
                                <textarea placeholder="Your dwitt?"></textarea>
                            </div>
                        </div>

                        <div className="content__dwitt-footer">
                            <div className="content__dwitt-footer-reaction">
                                <div>
                                    <img src={emoji} alt="img"></img>
                                </div>
                                <div>
                                    <img src={image} alt="img"></img>
                                </div>
                            </div>
                            <div className="content__dwitt-footer-btn">
                                <button type="button">Dwitt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
        </section>
    )
}

export default SectionContent;