import './styles.css'
import sakuraSvg from '../../assets/logoSvgs/SakuraLogo.svg'
import YugenSvg from '../../assets/logoSvgs/YugenLogo.svg'
import KomorebiSvg from '../../assets/logoSvgs/KomorebiLogo.svg'

export const OurProductComponent = () =>{
    return(
        <div className="ourProductSection">
            <div className="ourProductContainer">
                <h2>Our Product</h2>
                <h1>Our Range Of Crypto Product</h1>
                <ul className='ourProductList'>
                    <li className='clipPath'>
                        <div className='ourProductListLogoContainer'>
                            <img src={sakuraSvg} alt="error 404" />
                        </div>
                        <div className='ourProductListContent'>
                            <h3>Sakura</h3>
                            <p>Vitae Vel Froin</p>
                        </div>
                    </li>
                    <li className='clipPathMirror'>
                        <div className='ourProductListLogoContainer'>
                            <img src={KomorebiSvg} alt="error 404" />
                        </div>
                        <div className='ourProductListContent'>
                            <h3>Komorebi</h3>
                            <p> Vitae Vel Froin</p>
                        </div>
                    </li>
                    <li className='clipPath'>
                        <div className='ourProductListLogoContainer'>
                            <img src={YugenSvg} alt="error 404" />
                        </div>
                        <div className='ourProductListContent'>
                            <h3>Yugen</h3>
                            <p>Viate Vel Froin</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}