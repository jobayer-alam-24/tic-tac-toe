$(document).ready(function(){
    let buttons = $('.board .cell');
    let head = $("h1");
    let start = $('.start');
    let count = 0;
    let reset = $('.reset');
    let current = true;

    reset.on('click', () => {
        buttons.each((e, target) => {
           target.innerText = "";
           target.disabled = false;
        })
        current = true;
    })
    start.on('click', () => {
        buttons.each((e, target) => {
           target.innerText = "";
           target.disabled = false;
        })
        current = true;
        console.log(head);
        head.text(`Tic Tac Toe V.${count = count + 1}`);
    })
    buttons.on('click', (e) => {
        if(current)
        {
            $(e.target).css("color", "blue");
            e.target.innerText = "X";
            current = false;
        }
        else
        {
            $(e.target).css("color", "red");
            e.target.innerText = "O";
            current = true;
        }
        e.target.disabled = true;
    })
})