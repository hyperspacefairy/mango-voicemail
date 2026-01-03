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
        const answer1 = document.getElementById('answer1').value.trim().toLowerCase();
        const question2 = document.getElementById('question2').value;
        const answer2 = document.getElementById('answer2').value.trim().toLowerCase();
        const question3 = document.getElementById('question3').value;
        const answer3 = document.getElementById('answer3').value.trim().toLowerCase();
        const errorMessage = document.getElementById('securityError');
        
        // Correct question values
        const correctQuestions = {
            question1: 'pet',
            question2: 'highschool',
            question3: 'professor'
        };
        
        // Multiple acceptable answers for each question (all lowercase)
        const acceptableAnswers = {
            answer1: ['picklebean', 'pickle bean'],
            answer2: ['lincoln high school', 'lincoln highschool', 'lincoln high', 'lincoln'],
            answer3: ['keaton']
        };
        
        // Validate questions are correct
        const isQuestion1Correct = question1 === correctQuestions.question1;
        const isQuestion2Correct = question2 === correctQuestions.question2;
        const isQuestion3Correct = question3 === correctQuestions.question3;
        
        // Validate answers (check if answer matches ANY of the acceptable answers)
        const isAnswer1Correct = acceptableAnswers.answer1.includes(answer1);
        const isAnswer2Correct = acceptableAnswers.answer2.includes(answer2);
        const isAnswer3Correct = acceptableAnswers.answer3.includes(answer3);
        
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
            errorMessage.textContent = 'Hmm, something is not quite right! Make sure you've chosen all 3 security questions correctly AND entered the right answers.';
            errorMessage.style.display = 'block';
            
            // Clear the inputs
            document.getElementById('answer1').value = '';
            document.getElementById('answer2').value = '';
            document.getElementById('answer3').value = '';
        }
    });
}
