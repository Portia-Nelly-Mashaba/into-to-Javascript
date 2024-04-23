const createHeader = () => {
    let head = document.querySelector('.header');

    head.innerHTML = `<div class="logo">Portia.</div>    
                      <nav class="navbar">
                        <a href="index.html">Home</a>
                        <a href="#about" class="active">About Me</a>
                        <a href="contact.html">Contact Us</a>
                      </nav>
                    `;
}
createHeader(); 

const createHomeContent = () => {
    let container1 = document.querySelector('.home');
    let container2 = document.querySelector('.myproject');
    let container3 = document.querySelector('.education');
    let container4 = document.querySelector('.skills');
    let container5 = document.querySelector('footer');


    container1.innerHTML = `<div class="home-content">
    <h1>Hi, I'm <span>Portia Mashaba</span></h1>
    
        <h3>Full Stack Developer</h3>
    
    <p>Seasoned full-stack developer with 5+ years of experience crafting innovative web solutions. Proficient in 
        front-end and back-end technologies, dedicated to delivering high-quality code and exceptional user experiences.
         Passionate problem-solver and lifelong learner.
    </p>
    <div class="btn-box">
        <a href="#" class="btn">Hire Me</a>
        <a href="#" class="btn">Let's Talk</a>
    </div>
</div>

<div class="home-sci">
    <a href="https://www.facebook.com/portia.mashaba.7"><i class='bx bxl-facebook' ></i></a>
    <a href="https://github.com/Portia-Nelly-Mashaba"><i class='bx bxl-github' ></i></a>
    <a href="https://www.linkedin.com/in/portia-mashaba-674a68131"><i class='bx bxl-linkedin' ></i></a>
</div>
<!--<img src="media/images/Portia.png" alt="Example Image">-->
                    `;

    container2.innerHTML = `<div class="project-wrapper">
    <div class="project">
        <h2 class="heading">My <span>Projects</span></h2>
        <div class="cards">
            <div class="card">
                <i class="fa-solid fa-briefcase"></i>
                <h2>Portfolio Website</h2>
                <p>A portfolio website that showcase my individual work, achievements, 
                    skills and highlights my capabilities and experience in Tech.</p>
                <div class="link">
                    <a href="https://github.com/Portia-Nelly-Mashaba/Portfolio.git"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>

            <div class="card">
                <i class="fa-solid fa-cart-shopping"></i>
                <h2>E-commerce</h2>
                <p>An e-commerce website is an online platform where businesses can showcase and sell products or services to customers. 
                    It typically includes features such as product listings, shopping carts, secure payment gateways, and customer account management.</p>
                    <div class="link">
                        <a href="#"><i class="fa-brands fa-github"></i></a>
                    </div>
            </div>

            <div class="card">
                <i class="fa-solid fa-notes-medical"></i>
                <h2>Health App</h2>
                <p>Health Connect Pro is a comprehensive doctor appointment and healthcare app with AI assistance. It offers users the convenience of booking doctor appointments, 
                    accessing pharmacy services, requesting ambulance assistance, and promoting wellness</p>
                <div class="link">
                    <a href="https://github.com/Portia-Nelly-Mashaba/Health-Connect-Pro_App.git"><i class="fa-brands fa-github"></i></a>
                </div>    
            </div>

            <div class="card">
                <i class="fa-solid fa-microphone"></i>
                <h2>Voice to words ChatGPT</h2>
                <p>Voice to Words ChatGPT is an app that leverages advanced speech recognition technology 
                    to accurately transcribe spoken language into text. </p>
                    <div class="link">
                        <a href="https://github.com/Portia-Nelly-Mashaba/Via-Chat-App.git"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>

            <div class="card">
                <i class="fa-solid fa-bell"></i>
                <h2>On Demand Service App</h2>
                <p>ClickN'Go DoorStep Service App is a mobile app that connects Users with Service Providers who can deliver various services to their doorstep on demand.</p>
                    <div class="link">
                        <a href="https://github.com/Portia-Nelly-Mashaba/ClickN-Go-DoorStep-Service-App.git"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>

            <div class="card">
                <i class="fa-solid fa-list"></i>
                <h2>To-do list App</h2>
                <p>A to-do list app is a productivity tool that helps users organize tasks and manage their time efficiently. It allows users to create, prioritize, and track tasks, 
                    set deadlines and reminders, and categorize tasks into different lists. </p>
                    <div class="link">
                        <a href="https://github.com/Portia-Nelly-Mashaba/Task-Management.git"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
        </div>
    </div>
</div>`;

    container3.innerHTML =`<h2 class="heading">My <span>Journey</span></h2>
    <div class="education-row">
        <div class="eductaion-column">
            <h3 class="title">Education</h3>

            <div class="education-box">
                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2022 - 2023</div>
                        <h3>Power Learn Project - Software Development Certficate</h3>
                        <p>Software Development Certificate, majors in Python and Django framework, HTML, CSS & Javascript, Dart & Flutter, Business 
                            Fundamentals and Computer Essentials</p>
                    </div>
                </div>

                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2011 - 2013</div>
                        <h3>Ekurhuleni West College - Higher Certficate in Software Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt molestias voluptate?
                             </p>
                    </div>
                </div>

                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2004 - 2008</div>
                        <h3>Bokamoso Secondary School - Matric</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt molestias voluptate?
                             Sit, excepturi? Accusamus odio provident illum error expedita dolorum aperiam commodi 
                             repudiandae quasi, explicabo modi rerum ea quo.</p>
                    </div>
                </div>

            </div>
        </div>


        <div class="eductaion-column">
            <h3 class="title">Experience</h3>

            <div class="education-box">
                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2015 - 2020</div>
                        <h3>Software Developer - RAM Transport</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt molestias voluptate?
                             Sit, excepturi? Accusamus odio provident illum error expedita dolorum aperiam commodi 
                             repudiandae quasi, explicabo modi rerum ea quo.</p>
                    </div>
                </div>

                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2014 - 2015</div>
                        <h3>Software Developer Intern - Khum Mk Investments</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt molestias voluptate?
                             Sit, excepturi? Accusamus odio provident illum error expedita dolorum aperiam commodi 
                             repudiandae quasi, explicabo modi rerum ea quo.</p>
                    </div>
                </div>

                <div class="education-content">
                    <div class="content">
                        <div class="year"><i class='bx bxs-calendar' ></i>2012 - 2013</div>
                        <h3>Software Developer - Lisel Reseach</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt molestias voluptate?
                             Sit, excepturi? Accusamus odio provident illum error expedita dolorum aperiam commodi 
                             repudiandae quasi, explicabo modi rerum ea quo.</p>
                    </div>
                </div>

            </div>
        </div>
   
    </div>`;

    container4.innerHTML =`<h2 class="heading">My <span>Skills</span></h2>
    <div class="skills-row">
        <div class="skills-column">
            <h3 class="title">Coding Skills</h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>HTML, CSS & Bootstrap <span>90%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Python and Django<span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Dart and Flutter <span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Laravel <span>50%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>

            </div>
        </div>
     <div class="skills-column">
            <h3 class="title">Professional Skills</h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>Web Development <span>95%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Mobile Development<span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>SQL Development<span>80%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Help Desk Management <span>100%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

    container5.innerHTML = `<div class="footer-text">
    <p>Copyright &copy; 2023 by Portia | All Rights Reserved.</p>
</div>

<div class="footer-iconTop">
    <a href="#about"><i class='bx bx-up-arrow-alt' ></i></a>
</div>`;
}
createHomeContent(); 