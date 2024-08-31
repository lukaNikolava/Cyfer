import './styles.css'
import footerLogo from '../../assets/logoSvgs/footerLogo.png'
import footerFbLogo from '../../assets/logoSvgs/footerFacebookLogo.png'
import footerTwiterLogo from '../../assets/logoSvgs/footerTwiterLogo.png'
import footerInstaLogo from '../../assets/logoSvgs/footerTwiterLogo.png'
import footerBackground from '../../assets/elementPngs/footerBackground.png'

export const FooterComponent = () =>{
    return(
        <div className="footerSection">
            <img className='footerBackground' src={footerBackground} alt="error404" />
            <div className="footerContainer">
                <div className='footerContent'>
                    <div className='footerHeader'>
                        <img className='footerMainLogo' src={footerLogo} alt="error404" />
                        <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                        <ul className='footerLogosList'>
                            <li><img src={footerFbLogo} alt="error404" /></li>
                            <li><img src={footerInstaLogo} alt="error404" /></li>
                            <li><img src={footerTwiterLogo} alt="error404" /></li>
                        </ul>
                    </div>
                    <div className='footerList'>
                        <ul>
                            <h1>Navigation</h1>
                            <li>About Us </li>
                            <li>What We Do </li>
                            <li>News </li>
                            <li>Projects </li>
                            <li>FAQ </li>
                            <li>Ofiices</li>
                        </ul>
                        <ul>
                            <h1>Resources</h1>
                            <li>About Us </li>
                            <li>What We Do </li>
                            <li>News </li>
                            <li>Projects </li>
                            <li>FAQ </li>
                            <li>Ofiices</li>
                        </ul>
                        <ul>
                            <h1>Contact Info</h1>   
                            <li>828 Timbercrest Road</li>
                            <li>Telephone : + (012) 345 6789</li>
                            <li>Fax : + (012) 345 6789</li>
                            <li>Email : contact@cyfer.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='copyRights'>Copyright ©2023 Dotcreativemarket., Ltd. All right reserved</p>
        </div>
    )
}