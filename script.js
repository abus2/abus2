 // Interactive Skill Tooltips
 const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
      skill.addEventListener('mouseover', () => {
        const tooltipText = skill.getAttribute('data-tooltip');
        const tooltip = document.createElement('span');
        tooltip.textContent = tooltipText;
        tooltip.style.position = 'absolute';
        tooltip.style.top = '-30px';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.background = '#f39c12';
        tooltip.style.color = '#121212';
        tooltip.style.padding = '5px 10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.fontSize = '0.9rem';
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.3)';
        skill.appendChild(tooltip);

        skill.addEventListener('mouseleave', () => {
          tooltip.remove();
        });
      });
    });

    document.addEventListener('DOMContentLoaded', function() {
  const skills = document.querySelectorAll('.skill-item');
  
  // Function to animate the skill bars
  skills.forEach(skill => {
    const percentage = skill.getAttribute('data-skill');
    const progressBar = skill.querySelector('.skill-progress');
    
    // Set the width of the progress bar
    progressBar.style.width = `${percentage}%`;
  });
});


const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Reset active class on all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter items based on the selected category
        portfolioItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    portfolioItems.forEach(item => {
      item.addEventListener('click', () => {
        const title = item.querySelector('h3').textContent;
        const description = item.querySelector('p').textContent;
        modal.querySelector('h3').textContent = title;
        modal.querySelector('p').textContent = description;
        modal.style.display = 'flex';
      });
    });

    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }