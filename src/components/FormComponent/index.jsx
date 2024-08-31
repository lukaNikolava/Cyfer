import './styles.css'
import formBackground from '../../assets/elementPngs/formBackground.png'

export const FormComponent = () =>{
    return(
        <div className="formSection">
            <div className="formContainer">
                <img className='formContainerBackground' src={formBackground} alt="error404" />
                <div className='formContainerHeader'>
                    <h1>Embark on a Digital Journey</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Erat donec eleifend vulputate mattis nunc justo morbi imperdiet. Et nisl ac eu tempus.</p>
                </div>
                <form>
                    <div className='formElement'>
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" id="fullName" />
                    </div>
                    <div className='formElementContainer'>
                        <div className='formElement'>
                            <label htmlFor="fullName2">Full Name</label>
                            <input type="text"  id="fullName2" />
                        </div>
                        <div className='formElement'>
                            <label htmlFor="fullName3">Full Name</label>
                            <input type="text" id="fullName3" />
                        </div>
                    </div>
                    <div className='formElement'>
                        <label htmlFor="fullName4">Full Name</label>
                        <input type="text" id="fullName4" />
                    </div>
                    <div className='formElement'>
                        <label htmlFor="fullName5">Full Name</label>
                        <input type="text" id="fullName5" />
                    </div>
                    <div className='formElement'>
                        <label htmlFor="checkbox">Full Name</label>
                        <input type="chebox" id="checkbox" />
                    </div>
                    <div className='formButtonContainer'>
                        <button>Contact Now</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
