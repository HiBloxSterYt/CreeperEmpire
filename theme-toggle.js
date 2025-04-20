
    // Check for saved theme in localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.body.classList.add(currentTheme);
    }
    
    const toggleButton = document.getElementById('theme-toggle');
    
    // Switch between dark and light mode
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      
      // Save the current theme in localStorage
      if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
      } else {
        localStorage.removeItem('theme');
      }
    });
    