(function(){

const ogtxt = "Welcome to my room! Since you're here, why don't you take a look around. But be shhh... be quiet! My roommate is sleeping.";
const catTxt = "Looks like my cat is awake. I hope he will ask for breakfast at a reasonable time.";
const bearTxt = "I won this at an arcade before going to college. My old apartment dryer burnt it a bit, but I still love it.";
const posterTxt = "I got these posters my sophmore year. I'm surprised they've held up.";
const computerTxt = "I got this computer so I could do 3D modeling, but I mostly just use it for school now.";
const coffeeTxt = "I've developed quite the caffeine addiction...";
const phoneTxt = "Looks like I missed a call from my mom earlier, I will call her back in the morning.";
const doorTxt = "Leaving already?";


const txt = document.querySelector('#txt');
const cat = document.querySelector('#cat');
const bear = document.querySelector('#bear');
const posters = document.querySelector('#posters');
const computer = document.querySelector('#computer');
const coffee = document.querySelector('#coffee');
const phone = document.querySelector('#phone');
const door = document.querySelector('#door');

cat.addEventListener('mouseover', function(){
 txt.innerHTML = catTxt;
})
cat.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})


bear.addEventListener('mouseover', function(){
 txt.innerHTML = bearTxt;
})
bear.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

posters.addEventListener('mouseover', function(){
 txt.innerHTML = posterTxt;
})
bear.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

computer.addEventListener('mouseover', function(){
 txt.innerHTML = computerTxt;
})
bear.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

coffee.addEventListener('mouseover', function(){
 txt.innerHTML = coffeeTxt;
})
bear.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

phone.addEventListener('mouseover', function(){
 txt.innerHTML = phoneTxt;
})
phone.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

door.addEventListener('mouseover', function(){
 txt.innerHTML = doorTxt;
})
door.addEventListener('mouseout', function(){
    txt.innerHTML = ogtxt;
})

})();