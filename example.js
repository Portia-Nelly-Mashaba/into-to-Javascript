
// Create the header section
const header = document.createElement('header');
header.classList.add('header');

const logo = document.createElement('div');
logo.classList.add('logo');
logo.textContent = 'Portia.';

const nav = document.createElement('nav');
nav.classList.add('navbar');

const homeLink = document.createElement('a');
homeLink.href = '#home';
homeLink.classList.add('active');
homeLink.textContent = 'Home';

const aboutLink = document.createElement('a');
aboutLink.href = 'about.html';
aboutLink.textContent = 'About Me';

const contactLink = document.createElement('a');
contactLink.href = 'contact.html';
contactLink.textContent = 'Contact Us';

nav.append(homeLink, aboutLink, contactLink);
header.append(logo, nav);

// Create the video section
const section1 = document.createElement('section');
section1.classList.add('section1');

const videoOverlay = document.createElement('div');
videoOverlay.classList.add('video-overlay');

const video = document.createElement('video');
video.autoplay = true;
video.muted = true;
video.loop = true;
video.controls = true;

const source = document.createElement('source');
source.src = 'media/How KFC\'s Colonel Sanders Failed 1009 Times and Became Successful In His 60s - Motivational Video.mp4';
source.type = 'video/mp4';

const videoFallbackText = document.createTextNode('Your browser does not support the video tag.');

video.append(source, videoFallbackText);
section1.append(videoOverlay, video);

// Create the about me section
const section2 = document.createElement('section');
section2.classList.add('section2');

const section2Content = document.createElement('div');
section2Content.classList.add('section2-content');

const h1 = document.createElement('h1');
h1.textContent = 'Portia ';

const span = document.createElement('span');
span.textContent = 'Mashaba';

const img = document.createElement('img');
img.classList.add('img-deg');
img.src = 'media/images/Portia.png';
img.alt = 'Portia-Nelly-Mashaba';

const paragraph1 = document.createElement('p');
paragraph1.innerHTML = `I'm a seasoned full-stack developer with over five years of hands-on experience in the field. Specializing 
                in both front-end and back-end development, I've had the privilege of crafting robust, user-centric web applications 
                that seamlessly integrate creativity with functionality. With a deep-rooted passion for problem-solving and a commitment 
                to staying at the forefront of emerging technologies, 
                I strive to deliver innovative solutions that exceed expectations and drive meaningful impact.`;

const paragraph2 = document.createElement('p');
paragraph2.innerHTML = `Combining my diverse roles as a SQL developer, software tester, and help desk support in software development, I've garnered extensive experience navigating the intricacies of database management, ensuring software quality, and providing adept technical assistance. Throughout my journey, I've ventured into hackathons, tackling innovative challenges head-on, and emerged victorious in several, 
                leveraging my problem-solving skills to craft effective solutions and pushing the boundaries of innovation.`;

h1.append(span);
section2Content.append(h1, img, paragraph1, paragraph2);
section2.append(section2Content);

// Create the footer section
const footer = document.createElement('footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('container');

const footerContent1 = document.createElement('div');
footerContent1.classList.add('footer-content');

const footerContent2 = document.createElement('div');
footerContent2.classList.add('footer-content');

const footerContent3 = document.createElement('div');
footerContent3.classList.add('footer-content');

const addressHeading = document.createElement('h3');
addressHeading.textContent = 'Address';

const addressParagraph1 = document.createElement('p');
addressParagraph1.textContent = '123 Ivory Park';

const addressParagraph2 = document.createElement('p');
addressParagraph2.textContent = 'Midrand, Johannesburg';

const addressParagraph3 = document.createElement('p');
addressParagraph3.textContent = '1685';

const phoneParagraph = document.createElement('p');
phoneParagraph.textContent = 'Phone: +27 781526966';

addressHeading.append(addressParagraph1, addressParagraph2, addressParagraph3, phoneParagraph);
footerContent1.append(addressHeading);

const quickLinksHeading = document.createElement('h3');
quickLinksHeading.textContent = 'Quick Links';

const ul = document.createElement('ul');
ul.classList.add('list');

const homeLi = document.createElement('li');
const homeLinkFooter = document.createElement('a');
homeLinkFooter.href = '#home';
homeLinkFooter.textContent = 'Home';
homeLi.appendChild(homeLinkFooter);

const aboutLi = document.createElement('li');
const aboutLinkFooter = document.createElement('a');
aboutLinkFooter.href = 'about.html';
aboutLinkFooter.textContent = 'About';
aboutLi.appendChild(aboutLinkFooter);

const contactLi = document.createElement('li');
const contactLinkFooter = document.createElement('a');
contactLinkFooter.href = 'contact.html';
contactLinkFooter.textContent = 'Contact';
contactLi.appendChild(contactLinkFooter);

ul.append(homeLi, aboutLi, contactLi);
quickLinksHeading.appendChild(ul);
footerContent2.appendChild(quickLinksHeading);

const iframe = document.createElement('iframe');
iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67891076543!2dLongitude!3dLatitude!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU1JzM4LjgiTiAxMjnCsDU1JzEzLjkiRQ!5e0!3m2!1sen!2sus!4v1608385445321!5m2!1sen!2sus';
iframe.width = '400';
iframe.height = '300';
iframe.style.border = '0';
iframe.allowFullscreen = true;
iframe.loading = 'lazy';

footerContent3.appendChild(iframe);

footerContainer.append(footerContent1, footerContent2, footerContent3);

const bottomBar = document.createElement('div');
bottomBar.classList.add('bottom-bar');

const socialIcons = document.createElement('ul');
socialIcons.classList.add('social-icons');

const facebookLi = document.createElement('li');
const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/portia.mashaba.7';
const facebookIcon = document.createElement('i');
facebookIcon.classList.add('fab', 'fa-facebook');
facebookLink.appendChild(facebookIcon);
facebookLi.appendChild(facebookLink);

const githubLi = document.createElement('li');
const githubLink = document.createElement('a');
githubLink.href = 'https://github.com/Portia-Nelly-Mashaba';
const githubIcon = document.createElement('i');
githubIcon.classList.add('fab', 'fa-github');
githubLink.appendChild(githubIcon);
githubLi.appendChild(githubLink);

const instagramLi = document.createElement('li');
const instagramLink = document.createElement('a');
instagramLink.href = '#';
const instagramIcon = document.createElement('i');
instagramIcon.classList.add('fab', 'fa-instagram');
instagramLink.appendChild(instagramIcon);
instagramLi.appendChild(instagramLink);

