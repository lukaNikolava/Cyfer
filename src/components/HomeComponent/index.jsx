import "./styles.css"
import logo from "../../assets/logoSvgs/cyper.png"
import artWork from "../../assets/elementPngs/Arwork.png"
import cube from "../../assets/elementPngs/cube.png"
import layer from "../../assets/elementPngs/Layer_1.png"
import vector from "../../assets/elementPngs/VectorSmart.png"
import { useState , useEffect , useRef} from "react"

export const HomeComponent = () =>{
    const [isOpen, setIsOpen] = useState(false)

    const menuRef = useRef(null)
    const buttonRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen((prevState) => !prevState)
      };
    
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            menuRef.current && 
            !menuRef.current.contains(event.target) && 
            !buttonRef.current.contains(event.target) 
          ) {
            setIsOpen(false);
          }
        };
    
        if (isOpen) {
          document.addEventListener('mousedown', handleClickOutside)
          document.body.style.overflowY = 'hidden'
        } else {
          document.body.style.overflowY = 'auto'
        }
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside)
          document.body.style.overflowY = 'auto'
        };
      }, [isOpen]);

    return(
        <div className="homeSection">
            <div className="greenElement"></div>
            <div className="blueElement"></div>
            <img src={layer} alt="img not found" className="layer" />
            <div className="homeSectionContainer">
                <div className="purpleElement"></div>
                <div className="blueElementHomeSectionContainer"></div>
                <div className="homeContentContainer">
                    <div className="homeContentContainerBackground"></div>
                    <div className="homeContentContainerHeader">
                        <img src={logo} alt="Logo" className="cyferLogo" /> 

                        <div className={`burgerMenuButtonContainer ${isOpen ? 'active' : ''}`}  onClick={toggleMenu} ref={buttonRef}>
                            <div className="burgerMenuButton "></div>
                        </div>

                        <ul className="homeContentHeaderNav">
                            <li>Home </li>
                            <li>Product </li>
                            <li>Services </li>
                            <li>Why Us </li>
                            <li>Resources </li>
                            <li>About</li>
                        </ul>

                        <div className="borderContactNowButton">
                            <button className="contactNowButton">Contact Now</button>
                        </div> 

                    </div>
                    <div className="homeContentContainerMain">
                        <h1>Unlocking the Future of Finance</h1>
                        <p>In a digital age driven by innovation, cryptocurrency has emerged as a revolutionary force that is reshaping the way we perceive and interact with money. At [Your Crypto Platform], we are your gateway to this exciting world of decentralized finance, empowering you to explore, invest, and transact with confidence.</p>
                        <div className="homeContentBtnContainer">
                            <div className="contactUsButtonBorder">
                                <button>Contact Us</button>
                            </div>
                            <div className="learnMoreButtonBorderHp">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div className="homeContentContainerImage">
                        <img src={artWork} alt="image not found" className="artwork" />
                        <img src={cube} alt="image not found" className="cube"/>
                        <img src={vector} alt="image not found" className="vector"/>
                    </div>
                </div>
            </div>

            <div className={`burgerMenuContainer ${isOpen ? 'open' : ''}`} ref={menuRef}>
            <nav>
                <ul>
                    <li>Home </li>
                    <li>Product </li>
                    <li>Services </li>
                    <li>Why Us </li>
                    <li>Resources </li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
        </div>
    )
}