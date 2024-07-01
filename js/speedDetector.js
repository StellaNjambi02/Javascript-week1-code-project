
        
        function calculateDemeritPoints(speed) {
            // Set speed limit
            const speedLimit = 70;
          
            // Calculate speed difference
            const excessSpeed = speed - speedLimit;
          
            // Check for speeding
            if (excessSpeed <= 0) {
              return "Ok";
            }
          
            // Calculate demerit points (1 point for every 5 km/h over)
            const demeritPoints = Math.ceil(excessSpeed / 5);
          
            // Check for license suspension (more than 12 points)
            if (demeritPoints > 12) {
              return "License suspended.";
            }
          
            // Return demerit points
            return `Points: ${demeritPoints}`;
          }
          
          // Get speed input from user
          const speed = parseInt(prompt("Enter your speed (km/h): "));
          
          // Calculate and print demerit points
          const result = calculateDemeritPoints(speed);
          console.log(result);
          alert (result);
          