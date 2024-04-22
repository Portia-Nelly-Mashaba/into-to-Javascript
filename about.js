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
}
createHomeContent(); 