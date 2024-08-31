import './styles.css'
import { OurServicesPostsComponent } from './OurServicesPostsComponent'

export const OurServicesComponent = () =>{
    return(
        <div className="ourServicesSection">
            <div className="ourServicesContainer">
                <div className='ourServicesContainerTop'>
                    <div className='ourServicesContainerHeader'> 
                        <h2>Our Service</h2>
                        <h1>Stay One Step Ahead Of Adversaries</h1>
                    </div>
                    <div className='ourServicesContainerContent'>
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.</p>
                        <div className='learnMoreButtonBorder'>
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
                

                <OurServicesPostsComponent/>
            </div>
        </div>
    )
}