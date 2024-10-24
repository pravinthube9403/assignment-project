const toggleSwitch = document.getElementById('toggleSwitch');

        toggleSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        function activateStep(stepNumber) {
            // Remove active class from all circles and lines
            var circles = document.querySelectorAll('.circle1');
            var lines = document.querySelectorAll('.line');
            
            circles.forEach(function(circle, index) {
                if (index < stepNumber) {
                    circle.parentNode.classList.add('active'); // Add active class to current and previous circles
                } else {
                    circle.parentNode.classList.remove('active'); // Remove active class from future circles
                }
            });
        
            lines.forEach(function(line, index) {
                if (index < stepNumber - 1) {
                    line.classList.add('active-line'); // Add active-line class to the line before the step
                } else {
                    line.classList.remove('active-line'); // Remove active-line from future lines
                }
            });
        }
        