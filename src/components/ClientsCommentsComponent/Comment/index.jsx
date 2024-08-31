import './styles.css'
import commentsBackground from '../../../assets/elementPngs/commentBackground.png'
import user1 from '../../../assets/usersPFP/user1.png'
import user2 from '../../../assets/usersPFP/user2.png'
import user3 from '../../../assets/usersPFP/user3.png'
import fbLogo from '../../../assets/logoSvgs/facebookLogo.png'
import instaLogo from '../../../assets/logoSvgs/instagramLogo.png'
import twitterLogo from '../../../assets/logoSvgs/twitterLogo.png'

export const Comment = () =>{
    return(
        <div className="commentContainer">
            <div className="comment">
                <img className='commentBackground' src={commentsBackground} alt="" />
                <div className='commentHeader'>
                    <img src={user1} alt="error404" />
                    <ul>
                        <li className='commentNickname'>Wade Warren</li>
                        <li className='commentStatus'>Co-founder of superlink</li>
                        <li className='socMediaList'>
                            <img src={fbLogo} alt="error404" />
                            <img src={instaLogo} alt="error404" />
                            <img src={twitterLogo} alt="error404" />
                        </li>
                    </ul>
                </div>
                <div className='commentBody'>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                </div>
            </div>

            <div className="comment">
                <img className='commentBackground' src={commentsBackground} alt="" />
                <div className='commentHeader'>
                    <img src={user2} alt="error404" />
                    <ul>
                        <li className='commentNickname'>Wade Warren</li>
                        <li className='commentStatus'>Co-founder of superlink</li>
                        <li className='socMediaList'>
                            <img src={fbLogo} alt="error404" />
                            <img src={instaLogo} alt="error404" />
                            <img src={twitterLogo} alt="error404" />
                        </li>
                    </ul>
                </div>
                <div className='commentBody'>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                </div>
            </div>

            <div className="comment">
                <img className='commentBackground' src={commentsBackground} alt="" />
                <div className='commentHeader'>
                    <img src={user3} alt="error404" />
                    <ul>
                        <li className='commentNickname'>Wade Warren</li>
                        <li className='commentStatus'>Co-founder of superlink</li>
                        <li className='socMediaList'>
                            <img src={fbLogo} alt="error404" />
                            <img src={instaLogo} alt="error404" />
                            <img src={twitterLogo} alt="error404" />
                        </li>
                    </ul>
                </div>
                <div className='commentBody'>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                </div>
            </div>
        </div>
    )
}