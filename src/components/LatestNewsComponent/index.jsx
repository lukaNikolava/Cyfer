import './styles.css'
import latestNewsBg from '../../assets/elementPngs/latestNewsBg.png'
import bgImageLatestNews from '../../assets/elementPngs/bgImageLatestNews.png'
import bgImageLatestNews2 from '../../assets/elementPngs/bgImageLatestNews2.png'
import l1 from '../../assets/elementPngs/l1.png'
import l2 from '../../assets/elementPngs/l2.png'
import l3 from '../../assets/elementPngs/l3.png'

export const LatestNevsComponent = () =>{
    return(
        <div className="latestNewsSection">
            <div className="latestNewsContainer">
                <div className='latestNewsContainerHeader'>
                    <h2>Our Resources</h2>
                    <h1>Latest News & Blog</h1>
                </div>
                <div className='latestNewsContainerList'>
                    <div className='latestNewsContainerListMain'>
                        <div className='latestNewsContainerListMainContent'>
                            <h4>Sercurity | 10 min read</h4>
                            <h3>Lorem ipsum dolor sit amet consectetur. Pretium amet facilisis.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus hendrerit. Non donec ut aenean placerat pulvinar quis.</p>
                        </div>
                        <div className='latestNewsData'>
                            <p>August 4. 2023</p>
                        </div>
                        <img className='backgroundImageLatestNews' src={latestNewsBg} alt="error404" />
                        <img className='bgImageLatestNews' src={bgImageLatestNews} alt="error404" />
                        <img className='bgImageLatestNews' src={bgImageLatestNews2} alt="error404" />
                    </div>
                    <div className='latestNewsList'>
                        <img className='illChangethisLater' src={l1} alt="" />
                        <img className='illChangethisLater' src={l2} alt="" />
                        <img className='illChangethisLater' src={l3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}