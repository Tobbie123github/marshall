import { useParams } from "react-router-dom";
import {portfolio} from '../data';
import './PortfolioDetails.css';
import {AiOutlineArrowLeft } from 'react-icons/ai';
import {Link} from 'react-router-dom';
const PortfolioDetails =()=>{
    const { id } = useParams();
    const project = portfolio.find((item)=> item.id === parseInt(id));
   
    if(!project){
        return <div>Portfolio not found</div>
    }
   
    return(
        
        <section className="details">
       <div key={project.id} className="container porfolio_details">
        
    <Link to="/" className='go_back'>
        <AiOutlineArrowLeft /> 
    </Link>
           
            
        <div>
        <img src={project.image} alt='project' />
        </div>
        
        <div className="details_content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='technologies'>
                <h4>Technologies</h4>
                <span>{project.technologies}</span>
            </div>
            
            <div className='links'>
                <div><a style={{color: 'blue'}} href={project.website_url.startsWith('https') ? project.website_url : `https://${project.website_url}`} rel='noopener noreferrer' target='_blank'>{project.website_url}<span>{project.link_icon}</span></a></div>
                <div><a href={project.github_url.startsWith('https') ? project.github_url : `https://${project.github_url}`} target='_blank' rel='noopener noreferrer'><span className='github'>{project.github_icon}</span></a></div>
            </div>
        </div>
       </div>
       </section>
    )
}

export default PortfolioDetails;