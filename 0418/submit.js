var ebtn = {};
var pbtn = {};
var abtn = {};

ebtn=document.getElementById('economy_submit');
pbtn=document.getElementById('politics_submit');
abtn=document.getElementById('art_submit');

ebtn.addEventListener('click', saveEconomyAnswer);
pbtn.addEventListener('click', savePoliticsAnswer);
abtn.addEventListener('click', saveArtAnswer);

function saveEconomyAnswer(){
  let message;
  message=document.getElementById('economy_answer').value;
  let ok;
  ok=confirm('대답하시겠습니까?');
  localStorage.a1=message;
  if(ok){
    location.href='introduction.html';
    localStorage.b1='true';
  } else {
  }
}

function savePoliticsAnswer(){
  let message;
  message=document.getElementById('politics_answer').value;
  let ok;
  ok=confirm('대답하시겠습니까?');
  localStorage.a2=message;
  if(ok){
    location.href='introduction.html';
    localStorage.b2='true';
  } else {
  }
}

function saveArtAnswer(){
  let message;
  message=document.getElementById('art_answer').value;
  let ok;
  ok=confirm('대답하시겠습니까?');
  localStorage.a3=message;
  if(ok){
    localStorage.b3='true';
    location.href='introduction.html';
  } else {
  }
}
