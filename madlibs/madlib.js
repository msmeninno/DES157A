(function(){
'use strict';
    //HTML TEXT
    const q1 = "What is your gender?"
    const q1answers = ['Man', 'Woman', 'Nonbinary'];
    const q2 = "Where do you live?";
    const q2answers = ['Cemetery', 'Castle', 'Forest'];
    const q3 = "What is your alter?";
    const q3answers = ['Bat', 'Wolf', 'Raven'];
    const q4 = "What is your main weakness?";
    const q4answers = ['Holy Water', 'Silver', 'Garlic'];
    const q5 = "What is your special power?";
    const q5answers = ['Shadow Manipulation', 'Regeneration', 'Hypnosis'];
    const sub1 = "1 out of 5";
    const sub2 = "2 out of 5";
    const sub3 = "3 out of 5";
    const sub4 = "4 out of 5";
    const sub5 = "5 out of 5";

    //lists of qs
    const myQs = [q1, q2, q3, q4, q5];
    const mySubtitles = [sub1, sub2, sub3, sub4, sub5];
    const qAnswers = [q1answers, q2answers, q3answers, q4answers, q5answers];

    //list of answer divs (will change when nxt button clicked)
    const question = document.querySelector('.qtitle');
    const questionNum = document.querySelector('.qsubtitle');

    //attributes by tags/classes
    let answer = document.querySelectorAll(".answer")
    let answrRadio = document.querySelectorAll('input[type="radio"]');

    const nextbutton = document.querySelector(".nxt");
    const previousbutton = document.querySelector("#prev");

    const warning = document.querySelector('#scrollstart');

    const q1label = document.querySelector('.q1label');
    const q2label = document.querySelector('.q2label');
    const q3label = document.querySelector('.q3label');

    //initialized variables
    let selectedRadio = null;
    let myWords = [];
    let currQuestionIndex = 0;
 
    //helper functions
    function resetStyling(){
        //loop through all answer and remove class attributes
        for(let j = 0; j < answer.length; j++){
            answer[j].className = 'answer';
            answrRadio[j].className = 'nonSelect';
            warning.className = 'hidden';
        }
    }

    //TO-DO: make functions to change answer labels + values associated with them
    //use in next eventlistener and previous eventlistener
    function updateAnswers(){
        const currSet = qAnswers[currQuestionIndex];

        q1label.innerHTML = currSet[0];
        q2label.innerHTML = currSet[1];
        q3label.innerHTML = currSet[2];

        answrRadio[0].value = currSet[0];
        answrRadio[1].value = currSet[1];
        answrRadio[2].value = currSet[2];
    }



    //when answer item clicked, change styling to selected
    for(let i = 0; i < answer.length; i++){
        const curr = answer[i];
        const currRadio = answrRadio[i];
        curr.addEventListener('click', function(event){
            resetStyling();
            curr.className = 'selected';
            currRadio.className = 'selectedR'; 
            selectedRadio = currRadio;
        })
    }


    
//move to next question and save data of answer
nextbutton.addEventListener('click', function(event){
    event.preventDefault();
    
    if(selectedRadio){
        myWords.push(selectedRadio.value);
        selectedRadio = null;
        resetStyling();
        currQuestionIndex++;
        if(currQuestionIndex < myQs.length){
            question.innerHTML = myQs[currQuestionIndex];
            questionNum.innerHTML = mySubtitles[currQuestionIndex];
            updateAnswers();
            
            //previous button appears after question 1
            if(currQuestionIndex > 0){
                previousbutton.className = 'prev';
            }
        }
        else{
            //assign names
            if(myWords[0] === 'Man'){
                myWords[0] = 'Nikolai Van Draken';
            }
            else if(myWords[0] === 'Woman'){
                myWords[0] = 'Carmela de Lorraine';
            }
            else{
                myWords[0] = 'Rowan von Stein';
            }
            question.innerHTML = `Your vampire persona is ${myWords[0]}.`;
            question.className = 'vampname';
            previousbutton.className = 'hidden';
            nextbutton.className = 'hidden';
            questionNum.className = 'hidden';
            warning.className = 'hidden';
            let madlibResult = `You live in a <strong>${myWords[1].toLowerCase()}</strong>.  Your alter is a <strong>${myWords[2].toLowerCase()}</strong>. You are weak to <strong>${myWords[3].toLowerCase()}</strong> and your special ability is <strong>${myWords[4].toLowerCase()}</strong>.`;
            answer[0].innerHTML = madlibResult;
            //remove answer selectors
            for(let i = 0; i < answer.length; i++){
                answer[0].className = 'madlibtxt';
                answer[i].className = 'hidden';
                answrRadio[i].className = 'hidden';
            }
            
        }
    }  
    //if SelectedRadio false
    else{
        warning.innerHTML = '<p>Please select an answer</p>';
        warning.className = "warning";
    }
});

    //move to previous question, change data to new answer
    previousbutton.addEventListener('click', function(event){
        event.preventDefault();
        
        if(currQuestionIndex > 0){
            myWords.pop(); // Remove the answer from the question we're leaving
            currQuestionIndex = currQuestionIndex - 1; 
            question.innerHTML = myQs[currQuestionIndex];
            questionNum.innerHTML = mySubtitles[currQuestionIndex];
            //change answer labels
            updateAnswers();
            resetStyling();
            
            if(currQuestionIndex === 0){
                previousbutton.className = 'hidden';
            }
        }  
    })

})();