function $(e) { return document.querySelector(e); }

var next = $('.next');
var prev = $('.prev');
var index = 0;

var randomText = [
  {
    title: "Background Checks on All Gun Sales",
    desc: "Background checks are the foundation of any comprehensive gun violence prevention strategy. Currently fedaral law requires that background checks be conducted whenever a person attempts to buy a gun from licensed gun dealer. This is to ensure that the buyer is not legally prohibited from having a gun."
  },
  {
    title: "Extreme Risk Laws",
    desc: "When a person is in crisis and considering harming themselves or others, family members and law enforcement are often the first people to see the warning signs. Extreme Risk laws, sometimes referred to as Red flag laws, allow loved ones or law enforcement to intervene by petitioning a court for an order to temporarily prevent someone in crisis from accessing guns."
  },
  {
    title: "Prohibit People with Dangerous History",
    desc: "People with dangerous histories must be prohibited from having guns. Federal law prohibits gun possession by certain categories of people. States also set standards for who is too dangerous to have guns. People prohibited by federal or state law will fail a background check if they try to buy a gun from a licensed dealer."
  },
  {
    title: "Disarm HATE",
    desc: "Guns and hate are a fatal combination. In an average year, more than 10,300 hate crimes in the United States involve a firearm. Thats more than 28 each day. In most areas, some people convicted of hate crimes can still legally buy and have guns. Laws must be passed that will keep guns out of the hands of those who have been convicted of hate crimes."
  }
 
];

$('.content__title').innerHTML = randomText[0].title;
$('.content__desc').innerHTML = randomText[0].desc;

next.addEventListener('click', function() {
  if (index >= 0 && index <= 2) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+index+'--active');
    $('main').classList.add('view'+(index + 1)+'--active');
    index++;
  }
}, false);

prev.addEventListener('click', function() {
  if (index > 0 && index <= 3) {
    toggleView();
    setTimeout(function() {
      $('.content__title').innerHTML = randomText[index].title;
      $('.content__desc').innerHTML = randomText[index].desc;      
    }, 500)
    $('main').classList.remove('view'+(index)+'--active');
    $('main').classList.add('view'+(index - 1)+'--active');
    index--;
  }
}, false)

function toggleView() {
    $('main').classList.add('fade-out');
    setTimeout(function() {
      $('main').classList.remove('fade-out');
    }, 500)
}