'use strict';

var allScreens = [];

//The following arrays are for backrounds; and the jQuery used for the desired animation (is not calling anything yet).
var background = [
  //0
  ['img\1 (1).png'],

  //1
  ['img\1 (3).jpg'],

  //2
  ['img\1 (4).jpg'],

  //3
  ['img\1 (5).jpg'],

  //4
  ['img\1 (6).jpg'],

  //5
  ['img\1 (7).jpg'],

  //6
  ['img\1 (8).jpg'],

  //7
  ['img\1 (17).jpg'],

  //8
  ['img\1 (10).jpg'],

  //9
  ['img\1 (11).jpg'],

  //10
  ['img\1 (12).jpg'],

  //11
  ['img\1 (13).jpg'],

  //12
  ['imgs/window.jpg'],

  //13
  ['img\1 (14).jpg'],

  //14
  ['img\1 (15).jpg'],

  //15
  ['img\1 (9).jpg'],

  //16
  ['img\1 (1).jpg'],

//REMEMBER! REMEMBER! REMEMBER! You need an array for scenario aka scenarioParagraph.  You may want to start with iFrame of PowerPoint Lesson; then, followed by Police Officer stopping someone from committing suicide- HAVE THEM WRITE AN INCIDENT REPORT- use MS Small Basic???!!!
var scenario = [
  //0
  [''],
  //1
  ['', '', ''],
  //2
  ['', '', ''],
  //3
  ['', '', ''],
  //4
  [''],
  //5
  [''],
  //6
  ['', ''],
  //7
  [''],
  //8
  ['', '', ''],
  //9
  ['', '', ''],
  //10
  ['', ''],
  //11
  ['', '', ''],
  //12
  ['', '', ''],
  //13
  ['', '', ''],
  //14
  ['', ''],
  //15
  ['', '', ''],
  //16
  ['', '', ''],

//These are the arrays for the options that go with the scenarios
var option = [
  //0
  ['', ''],
  //1
  ['', ''],
  //2
  ['', ''],
  //3
  ['', ''],
  //4
  ['', ''],
  //5
  ['', ''],
  //6
  ['', ''],
  //7
  ['', ''],
  //8
  ['', ''],
  //9
  ['', ''],
  //10
  ['', ''],
  //11
  ['', ''],
  //12
  ['', ''],
  //13
  ['', ''],
  //14
  ['', ''],
  //15
  ['', ''],
  //16
  ['', ''],

//Global vars
var lessonContainer = document.getElementById('lessonContainer');
var setBack = document.getElementById('bkgImg');
var setResp = document.getElementById('p1');
var setSit = document.getElementById('scenarioParagraph');
var extra = document.getElementById('p3');

var action1 = document.getElementById('choice1');
var action2 = document.getElementById('choice2');

function Screen(index) {
  this.background = background[index];
  this.scenario = scenario[index];
  this.option = option[index];

  allScreens.push(this);
}

//Lesson progress (based on option the end-user chose)
for (var i = 0; i < scenario.length; i++) {
  new Screen(i);
}

//Functions being rendered
var renderedSit = document.createElement('section');
function render(i) {
  renderedSit.setAttribute('id', 's' + i);
  console.log('renderedSit runs', renderedSit);
  lessonContainer.appendChild(renderedSit);

  // setBack.setAttribute('src', allScreens[i].background);
  setResp.textContent = allScreens[i].scenario[0];
  setSit.textContent = allScreens[i].scenario[1];
  extra.textContent = allScreens[i].scenario[2];

  action1.textContent = allScreens[i].option[0];
  action2.textContent = allScreens[i].option[1];

  // renderBack.appendChild(setBack);
  renderedSit.appendChild(setResp);
  renderedSit.appendChild(setSit);
  renderedSit.appendChild(extra);
  renderedSit.appendChild(action1);
  renderedSit.appendChild(action2);
}

if(localStorage.currentScreen) {
  for (var i = 0; i < allScreens.length; i++) {
    if (allScreens[i].scenario[0] === JSON.parse(localStorage.currentScreen).scenario[0]) {
      render(i);
    }
  }
} else {
  render(0);
}

//Event listener/handling for click to move to next screen
action1.addEventListener('click', handleAction1);
action2.addEventListener('click', handleAction2);

function handleAction1() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(1);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(2);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(3);
  } else if ('s3' === renderedSit.getAttribute('id')) {
    render(4);
  } else if ('s4' === renderedSit.getAttribute('id') || 's5' === renderedSit.getAttribute('id')) {
    render(6);
  } else if ('s6' === renderedSit.getAttribute('id') || 's7' === renderedSit.getAttribute('id')) {
    render(8);
  } else if ('s8' === renderedSit.getAttribute('id') || 's9' === renderedSit.getAttribute('id')) {
    render(10);
  } else if ('s10' === renderedSit.getAttribute('id')) {
    render(11);
  } else if ('s11' === renderedSit.getAttribute('id')) {
    render(12);
  } else if ('s12' === renderedSit.getAttribute('id')) {
    render(13);
  } else if ('s13' === renderedSit.getAttribute('id') || 's14' === renderedSit.getAttribute('id')) {
    render(15);
  } else if ('s15' === renderedSit.getAttribute('id')) {
    render(16);
  } else if ('s16' === renderedSit.getAttribute('id')) {
    render(0);
  }
  for (var i = 0; i < allScreens.length; i++) {
    if(('s' + i) === renderedSit.getAttribute('id')) {
      localStorage.currentScreen = JSON.stringify(allScreens[i]);
    }
  }
}

function handleAction2() {
  if ('s0' === renderedSit.getAttribute('id'))
  {
    render(1);
  } else if ('s1' === renderedSit.getAttribute('id'))
  {
    render(2);
  } else if ('s2' === renderedSit.getAttribute('id')) {
    render(3);
  } else if ('s3' === renderedSit.getAttribute('id')) {
    render(5);
  } else if ('s4' === renderedSit.getAttribute('id') || 's5' === renderedSit.getAttribute('id')) {
    render(7);
  } else if ('s6' === renderedSit.getAttribute('id') || 's7' === renderedSit.getAttribute('id')) {
    render(9);
  } else if ('s8' === renderedSit.getAttribute('id') || 's9' === renderedSit.getAttribute('id')) {
    render(10);
  } else if ('s10' === renderedSit.getAttribute('id')) {
    render(12);
  } else if ('s11' === renderedSit.getAttribute('id')) {
    render(14);
  } else if ('s13' === renderedSit.getAttribute('id') || 's15' === renderedSit.getAttribute('id') || 's16' === renderedSit.getAttribute('id')) {
    render(21);
  } else if ('s14' === renderedSit.getAttribute('id')) {
    render(16);
  }
  } else if ('s20' === renderedSit.getAttribute('id') || 's21' === renderedSit.getAttribute('id')) {
    action2.onclick = function(){
      window.location.href = 'index.html';
    };
    action2.onclick(); //ALSO NEED TO CLEAR LOCAL STORAGE so the next person has a clean slate
  }
  for (var i = 0; i < allScreens.length; i++) {
    if(('s' + i) === renderedSit.getAttribute('id')) {
      localStorage.currentScreen = JSON.stringify(allScreens[i]);
    }
  }
}

var textDiv = $("#textDiv"),
    sentence = textDiv.html().split(""),
    tl = new TimelineMax({repeat:10, repeatDelay:0.4, yoyo:true});

$.each(sentence, function(index, val) {
			if(val === " ") {
				val = "&nbsp;";			}
			var letter = $("<span/>", {id : "txt" + index}).html(val).appendTo(textDiv);
   tl.to(letter, 1, {autoAlpha:1, ease:Back.easeOut,  fadeIn:0, transformOrigin:"50% 50% -20"}, index * 0.05);
});
