import './styles.css'
import maskGroup from '../../assets/elementPngs/MaskGroup.png'
import flBackground from '../../assets/elementPngs/flBackground.png'

export const ResourcesComponent = () =>{
    return(
        <div className="resourcesComponentSection">
            <div className="resourcesComponentContainer">
                <div className='groupMaskContainer'>
                    <img src={flBackground} alt="error404" />
                    <img src={maskGroup} alt="error404" />
                </div>
                <div className='resourcesComponentContent'>
                    <h2>Our Credentials</h2>
                    <h1>Expertise You Can Rely On</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero. Diam vivamus neque a fusce facilisis id ipsum cursus fermentum.</p>
                </div>
            </div>
        </div>
    )
}