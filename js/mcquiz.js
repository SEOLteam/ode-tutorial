function getScore( form ) {

var AnswersAndObjects = new Array();
AnswersAndObjects[0] = ["Ordinary Differential Equation", form.question1];
AnswersAndObjects[1] = ["Simple Harmonic Motion", form.question2];
AnswersAndObjects[2] = ["1/T", form.question3];
AnswersAndObjects[3] = ["T", form.question4];

var theScore = 0;

for (i=0; i < AnswersAndObjects.length; i++) {
currQuestionObject = AnswersAndObjects[i][1];
for (j=0; j<currQuestionObject.length; j++){
if (currQuestionObject[j].checked && currQuestionObject[j].value == AnswersAndObjects[i][0] ) {
theScore++;
break;
}
}
}

theScore = Math.round( theScore/AnswersAndObjects.length*100 );

form.percentage.value = theScore + "%";
}