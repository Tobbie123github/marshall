import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import portrait from '../../assets/3d-portrait-people.png'
const About =()=>{
    return(
        <section id='about'>
            <div className='container about'>
                <div className='about_head'>
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt='theme'/>
                </div>

                <div className='about_content'>
                    <div className='image_div'>
                        <img src={portrait} alt='portrait'/>
                    </div>

                    <div className='about_writeup'>
                        <p>I am an Experienced Website Developer with over five years of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.<br/><br/>
                        My passion for frontend and backend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring for each project
                        </p>

                        <div className='my_skills'>
                        <div className='my_skill'><p>WordPress</p><hr style={{width:"100%"}}/></div>
                        <div className='my_skill'><p>Woocommerce</p><hr style={{width:"100%"}}/></div>
                        <div className='my_skill'><p>Shopify</p><hr style={{width:"80%"}}/></div>
                        <div className='my_skill'><p>HTML & CSS</p><hr style={{width:"100%"}}/></div>
                        <div className='my_skill'><p>Javascript</p><hr style={{width:"70%"}}/></div>
                        <div className='my_skill'><p>React</p><hr style={{width:"70%"}}/></div>
                        <div className='my_skill'><p>PHP</p><hr style={{width:"90%"}}/></div>
                        <div className='my_skill'><p>MySQL</p><hr style={{width:"80%"}}/></div>
                        <div className='my_skill'><p>Git</p><hr style={{width:"100%"}}/></div>
                        <div className='my_skill'><p>API</p><hr style={{width:"90%"}}/></div>
                        
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </section>
    )
}

export default About;