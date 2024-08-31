import './styles.css'
import { Comment } from './Comment/INDEX.JSX'

export const ClientsCommentsComponent = () =>{
    return(
        <div className="clientsCommentsSection">
            <div className="clientsCommentsContainer">
                <div className="clientCommentsContainerHeader">
                    <h2 >Testimonials</h2>
                    <h1>What Our Clients Have to Say</h1>
                    <p>While you may think you are safe online, these real-life stories prove otherwise</p>
                </div>
                <div className='commentsSection'>
                    <Comment/>
                </div>
            </div>
        </div>
    )
}