// Function to animate number counting
const animateNumbers = (entry) => {
    const numbers = entry.target.querySelectorAll('.number');
    numbers.forEach((number) => {
      const updateCount = () => {
        const target = +number.getAttribute('data-target'); // Convert target to a number
        const count = +number.innerText;
        const increment = target / 200; // Control speed of counting
  
        if (count < target) {
          number.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 15); // Call function again after 15ms
        } else {
          number.innerText = target; // Ensure it ends at the target
        }
      };
      updateCount();
    });
  };
  
  // Create an IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumbers(entry);
        observer.unobserve(entry.target); // Stop observing after animation is done
      }
    });
  });
  
  // Select the container element for numbers
  const numberSection = document.querySelector('.number-container');
  observer.observe(numberSection);
  

  


  

  

  const resnavbar = document.getElementById("resnavbar")

  function sidebarToggle(){
  
      resnavbar.classList.toggle("resnavbar_open")
    
    }

    
    const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        const dotsContainer = document.querySelector('.dots');

        let currentSlide = 0;
        const slideCount = slides.length;
        const slidesPerView = 2;

        // Create dots
        for (let i = 0; i < slideCount / slidesPerView; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i * slidesPerView));
            dotsContainer.appendChild(dot);
        }

        const dots = document.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === Math.floor(currentSlide / slidesPerView));
            });
        }

        function goToSlide(n) {
            currentSlide = n;
            if (currentSlide >= slideCount) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slideCount - slidesPerView;
            slider.style.transform = `translateX(-${(currentSlide / slidesPerView) * 50}%)`;
            updateDots();
        }

        function nextSlide() {
            goToSlide(currentSlide + slidesPerView);
        }

        function prevSlide() {
            goToSlide(currentSlide - slidesPerView);
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Auto-slide
        setInterval(nextSlide, 5000);