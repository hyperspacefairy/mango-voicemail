// LOGIN PAGE LOGIC
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        
        // Always show error for any login attempt
        errorMessage.textContent = 'Incorrect username or password.';
        errorMessage.style.display = 'block';
        
        // Clear the input fields
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
}

// SECURITY QUESTIONS PAGE LOGIC
if (document.getElementById('securityForm')) {
    document.getElementById('securityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const question1 = document.getElementById('question1').value;
        const answer1 = document.getElementById('answer1').value.trim();
        const question2 = document.getElementById('question2').value;
        const answer2 = document.getElementById('answer2').value.trim();
        const question3 = document.getElementById('question3').value;
        const answer3 = document.getElementById('answer3').value.trim();
        const errorMessage = document.getElementById('securityError');
        
        // Correct answers (case-insensitive)
        const correctAnswers = {
            question1: 'pet',
            answer1: 'picklebean',
            question2: 'highschool',
            answer2: 'lincoln high school',
            question3: 'professor',
            answer3: 'keaton'
        };
        
        // Validate answers
        const isQuestion1Correct = question1 === correctAnswers.question1;
        const isAnswer1Correct = answer1.toLowerCase() === correctAnswers.answer1;
        const isQuestion2Correct = question2 === correctAnswers.question2;
        const isAnswer2Correct = answer2.toLowerCase() === correctAnswers.answer2;
        const isQuestion3Correct = question3 === correctAnswers.question3;
        const isAnswer3Correct = answer3.toLowerCase() === correctAnswers.answer3;
        
        if (isQuestion1Correct && isAnswer1Correct && 
            isQuestion2Correct && isAnswer2Correct && 
            isQuestion3Correct && isAnswer3Correct) {
            // SUCCESS! Redirect to voicemail
            errorMessage.style.display = 'none';
            // Show success message briefly
            errorMessage.style.color = '#4CAF50';
            errorMessage.textContent = '✓ Access granted! Redirecting...';
            errorMessage.style.display = 'block';
            
            // Redirect after 1 second
            setTimeout(function() {
                window.location.href = 'voicemail.html';
            }, 1000);
        } else {
            // ERROR - show error message
            errorMessage.style.color = '#FF1654';
            errorMessage.textContent = 'Incorrect answers. Please try again.';
            errorMessage.style.display = 'block';
            
            // Clear the inputs
            document.getElementById('answer1').value = '';
            document.getElementById('answer2').value = '';
            document.getElementById('answer3').value = '';
        }
    });
}
