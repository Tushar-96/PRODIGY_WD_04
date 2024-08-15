document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Dynamic greeting message based on the current time of day
    const greetingElement = document.querySelector('#home p');
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = 'Good morning! I\'m a passionate web developer dedicated to transforming ideas into visually stunning and highly functional websites. With a keen eye for design and a deep understanding of user experience, I strive to create digital spaces that are not only beautiful but also intuitive and responsive.Explore my portfolio to see how I blend creativity with code, and discover the projects that showcase my skills and dedication to the craft. Let\'s connect and turn your vision into reality!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good afternoon! I\'m a passionate web developer dedicated to transforming ideas into visually stunning and highly functional websites. With a keen eye for design and a deep understanding of user experience, I strive to create digital spaces that are not only beautiful but also intuitive and responsive.Explore my portfolio to see how I blend creativity with code, and discover the projects that showcase my skills and dedication to the craft. Let\'s connect and turn your vision into reality!';
    }else {
        greetingMessage = 'Good evening! I\'m a passionate web developer dedicated to transforming ideas into visually stunning and highly functional websites. With a keen eye for design and a deep understanding of user experience, I strive to create digital spaces that are not only beautiful but also intuitive and responsive.Explore my portfolio to see how I blend creativity with code, and discover the projects that showcase my skills and dedication to the craft. Let\'s connect and turn your vision into reality!';
    }

    greetingElement.textContent = greetingMessage;
});
