const createHeader = () => {
    let head = document.querySelector('.header');

    head.innerHTML = `<div class="logo">Portia.</div>    
                      <nav class="navbar">
                        <a href="index.html">Home</a>
                        <a href="about.html">About Me</a>
                        <a href="#contact" class="active">Contact Us</a>
                      </nav>
                    `;
}
createHeader(); 

const createContainer = () => {
    let contactContainer = document.querySelector('.contact-section');

    contactContainer.innerHTML = `<div class = "contact-bg">
    <h3>Get in Touch with the best developer in town</h3>
    <h2>contact me</h2>
    <div class = "line">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <p class = "text">Let's connect! I'm available for exciting projects. Reach out for collaboration opportunities.</p>
  </div>


  <div class = "contact-body">
    <div class = "contact-info">
      <div>
        <span><i class = "fas fa-mobile-alt"></i></span>
        <span>Phone No.</span>
        <span class = "text">+27 781526966</span>
      </div>
      <div>
        <span><i class = "fas fa-envelope-open"></i></span>
        <span>E-mail</span>
        <span class = "text">mail@nellycompany.com</span>
      </div>
      <div>
        <span><i class = "fas fa-map-marker-alt"></i></span>
        <span>Address</span>
        <span class = "text">123 Ivory Park, Midrand, Johannesburg</span>
      </div>
    </div>

    <div class = "contact-form">
      <form
           action="https://formspree.io/f/mnqelobo"
           method="POST">
        <div>
          <input type = "text" name ="name" class = "form-control" placeholder="Name" required>
          <input type = "text" name ="name" class = "form-control" placeholder="surname" required>
        </div>
        <div>
          <input type = "email" name ="email" class = "form-control" placeholder="E-mail" required>
          <input type = "text" name ="phone" class = "form-control" placeholder="Phone" required>
        </div>
        <textarea rows = "5" name ="message" placeholder="Message" class = "form-control" required></textarea>
        <input type = "submit" class = "send-btn" value = "send message">
      </form>
    </div>
  </div>


  <div class = "map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223700.1490386933!2d-97.11558670486288!3d28.829485511234168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864266db2e2dac3b%3A0xeee20d566f63267d!2sVictoria%2C%20TX%2C%20USA!5e0!3m2!1sen!2snp!4v1604921178092!5m2!1sen!2snp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>

  <div class = "contact-footer">
    <h3>Follow Us</h3>
    <div class = "social-links">
      <a href = "https://www.facebook.com/portia.mashaba.7" class = "fab fa-facebook-f"></a>
      <a href = "https://github.com/Portia-Nelly-Mashaba" class = "fab fa-github"></a>
      <a href = "https://www.linkedin.com/in/portia-mashaba-674a68131" class = "fab fa-linkedin"></a>
  
    </div>
  </div>`;
}
createContainer();