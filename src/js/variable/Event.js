///////////////////// beginning of events

el.addEventListener('click', function(e){

    if(e.target.getAttribute('class')=='menu__third-level finish') {
        var numberEl = e.target.parentElement.parentElement.parentElement.firstElementChild.dataset.number;
        var numberEl2 = e.target.dataset.number;
        elJs.textContent=TextWindows[numberEl+numberEl2].js;
        elHtml.textContent=TextWindows[numberEl+numberEl2].html
        elTask.innerHTML=TextWindows[numberEl+numberEl2].win;
        TextWindows[numberEl+numberEl2].fun();
    }


} );


menuFirstLevel.addEventListener('mouseover', function () {
    elJs.textContent=jsText;
    elHtml.innerHTML=htmlText;
    elTask.textContent=winTask;
    elWin.innerHTML=winText;
    console.clear();

});

///////////////////// end of events