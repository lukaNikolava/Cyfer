import "./styles.css"
import artworkSecond from "../../assets/elementPngs/Arwork2.svg"

export const DiscoverCryptocurrency = () =>{
    return(
        <div className="discoverCryptocurrencySection">
            <div className="discoverCryptocurrencyContainer">
                <div className="cryptocurrencyBackground"></div>
                <div>
                    <img src={artworkSecond} alt="img not found" />
                </div>
                <div className="discoverContantContainer">
                    <div>
                        <h1>Discover Cryptocurrency</h1>
                    </div>
                    <div className="discoverContantTextContainer">
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit volutpat id egestas augue tempor. Augue faucibus est at curabitur adipiscing ornare nunc sem libero.</p>
                        <p>Diam vivamus neque a fusce facilisis id ipsum cursus fermentum. Lectus mauris magna duis viverra velit vestibulum. Nunc sagittis amet enim pretium elit suscipit. Sagittis facilisi aliquet purus neque</p>
                    </div>
                </div>
            </div>
        </div>
    )
}