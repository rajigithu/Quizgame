var countDownTimer;
        var TimerInteval;
        var arraryofquestions = [];
        const maxtime = 5 * 60 *; // Time is in seconds
        function setCountDownTimer(){
            countDownTimer = maxtime;
        }
        //when the person clicks the begin button the timer starts
        //start time
        timeInterval = setInterval(update,1000);
        function updateTimer() {
            countDownTimer = countDownTimer - 1;
        }
        //questions is asked
        function SetupQuestions() {
            console.log("Setupquestions started");
            let question1 = {
                id: "ques0",
                question:"To select elements with a specific class",
                answer1: "The area where you will write the question",
                answer2: "The area where you will semicolon the question",
                answer3: "The area where you will comma the question",
                answer4: "The area where you will period the question",
                correctAnswer:2

            };
            let question2 = {
                id: "ques1",
                question:"To select elements with a class",
                answer1: "The area where you will write the question",
                answer2: "The area where you will semicolon the question",
                answer3: "The area wherecomma the  question",
                answer4: "The area  you will period the question",
                correctAnswer:3

            };
            arrayofQuestions.push(question1);
            arrayofQuestions.push(question2);

            console.log(" Setupquestions arrayofquestions:",arrayofQuestions);

        }
        function nextQuestion(){
            for(let i= 0; i<arrayofQuestions.length; i++){
        }
        function showQuestion(questionindex){
            let questionsection = document.getElementById('question');
            let newQuestions = document.createElement('div');
            newQuestion.id = arrayofquestions[questionindex].id;
            newQuestion.innerText = arrayofquestions9questionindex].question;
            questionsection.appendChild(newQuestions)
            
        }
        
        //if the question is correct next question
        //if the question is incorrect time penalty
        //if the answer is correct show points and then for the next question
        //once all questions have been answered give options
        //once all questions have been answered give options to save score
        //if user chooses to save score show the score board
