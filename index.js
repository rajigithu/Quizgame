var countDownTimer;
        var TimerInteval;
        var arrayofquestions = [];
        var gamescore= 0;
        const penalty = 30; 
        const maxtime = 5 * 60 ; // Time is in seconds
        function setCountDown()
         {
                countDownTimer = maxtime;
                console.log("countDownTimer:",countDownTimer);
            }
        //when the person clicks the begin button the timer starts
        //start time


        function startTimer(){
        TimerInteval = setInterval(update,1000);
        console.log("countDownTimer:",countDownTimer);
        }

        function updateTimer(){
                    countDownTimer --;
            console.log("countDownTimer:",countDownTimer);
    
        }

        function presentTimer(){
        let currentTime = document.getElementById('timer');
        currentTime.innertext= countdowntimer;
        console.log('showtime:CurrentTime",currenttime');
    }

        function showScoreBoard(){
            letscoreBoard= document.getElementById('score-board');
            console.log("showscoreBoard: scoreBoard",scoreBoard);
           // showScoreBoard.classlist.toggle('hide', false);
            showScoreBoard.classList.remove('hide');
        }
        function presentScore(){
            let scoreBoard = document.getElementById('score');
            console.log("currentscore: currentscore",currentscore);
        }

        function hideGreeting(){
            let Welcome= document.getElementById('Greeting');
            console.log("hideGreeing": "Greeting", Greeting);
           // showScoreBoard.classlist.toggle('hide', false);
            showScoreBoard.classList.remove('hide');
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
            arrayofquestions.push(question1);
            arrayofquestions.push(question2);

            console.log(" Setupquestions arrayofquestions:",arrayofquestions);

        }
        function getQuestion(questionid){
            console.log('getquestion questionid', questionid);
            let found= false;
            for(let i= 0; i <arrayofquestions.length; i++){
                if(questionId ==arrayofquestions[i].id){
                    preparequestionAndAnswers(i);
                }
        }

        function PrepareQuestionandAnswer(questionindex){
            let questionsection = document.getElementById('question');
            let newQuestions = document.createElement('div');
            newQuestions.id = arrayofquestions[questionindex].id;
            newQuestions.innerText = arrayofquestions[questionindex];question;
                    newQuestions.classList.add('question');
            
        }
        if(arrayofquestions[questionindex].answer1){
            let answer =document.createElement('div');
            answer.innertext= arrayofquestions[questionindex];question;
            answer.classList.add('answer1');
            answerid= "" + arrayofquestions[questionindex].id +"answer1";
            questionsection.appendchild(answer);

            
        }
        
        //if the question is correct next question
        //if the question is incorrect time penalty
        //if the answer is correct show points and then for the next question
        //once all questions have been answered give options
        //once all questions have been answered give options to save score
        //if user chooses to save score show the score board
