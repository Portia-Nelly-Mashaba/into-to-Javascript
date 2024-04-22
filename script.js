const createHeader = () => {
    let head = document.querySelector('.header');

    head.innerHTML = `<div class="logo">Portia.</div>    
                      <nav class="navbar">
                        <a href="#home" class="active">Home</a>
                        <a href="about.html" >About Me</a>
                        <a href="contact.html">Contact Us</a>
                      </nav>
                    `;
}
createHeader();   
   
const createHomeContent = () => {
    let container1 = document.querySelector('.section1');
    let container2 = document.querySelector('.section2');
    let container3 = document.querySelector('footer');

    container1.innerHTML = `<video autoplay muted loop controls>
    <source src="media/How KFC's Colonel Sanders Failed 1009 Times and Became Successful In His 60s - Motivational Video.mp4" type="video/mp4" >
    Your browser does not support the video tag.
</video>`;

    container2.innerHTML = `<div class="section2-content">
    <h1>Portia <span>Mashaba</span></h1>
        <p>
            <img class="img-deg" src="media/images/Portia.png" alt="Portia-Nelly-Mashaba">
            I'm a seasoned full-stack developer with over five years of hands-on experience in the field. Specializing 
            in both front-end and back-end development, I've had the privilege of crafting robust, user-centric web applications 
            that seamlessly integrate creativity with functionality. With a deep-rooted passion for problem-solving and a commitment 
            to staying at the forefront of emerging technologies, 
            I strive to deliver innovative solutions that exceed expectations and drive meaningful impact.
        
        </p>
        <p>
            Combining my diverse roles as a SQL developer, software tester, and help desk support in software development, I've garnered extensive experience navigating the intricacies of database management, ensuring software quality, and providing adept technical assistance. Throughout my journey, I've ventured into hackathons, tackling innovative challenges head-on, and emerged victorious in several, 
            leveraging my problem-solving skills to craft effective solutions and pushing the boundaries of innovation.
        </p>
    
        </div>
    
</div>
        `;

    container3.innerHTML = `<div class="container">
    <div class="footer-content">
        <h3>Address</h3>
        <p>123 Ivory Park</p>
        <p>Midrand, Johannesburg</p>
        <p>1685</p>
        <p>Phone: +27 781526966</p>
    </div>
    <div class="footer-content">
        <h3>Quick Links</h3>
         <ul class="list">
            <li><a href="#home">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
         </ul>
    </div>
    <div class="footer-content">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67891076543!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU1JzM4LjgiTiAxMjnCsDU1JzEzLjkiRQ!5e0!3m2!1sen!2sus!4v1608385445321!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>               
        </div>
</div>

<div class="bottom-bar">
    <ul class="social-icons">
        <li><a href="https://www.facebook.com/portia.mashaba.7"><i class="fab fa-facebook"></i></a></li>
        <li><a href="https://github.com/Portia-Nelly-Mashaba"><i class="fab fa-github"></i></a></li>
        <li><a href=""><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com/in/portia-mashaba-674a68131"><i class="fab fa-linkedin"></i></a></li>
       </ul>
    <p>&copy; 2024 your company . All rights reserved</p>
</div>
`;    
}
createHomeContent();

