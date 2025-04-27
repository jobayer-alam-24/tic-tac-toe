$(document).ready(function(){
    let buttons = $('.board .cell');
    let head = $("h1");
    let head4 = $("h4");
    let start = $('.start');
    let count = 0;
    let reset = $('.reset');
    let current = true;

    head4.hide();
    reset.on('click', () => {
        buttons.each((e, target) => {
           target.innerText = "";
           target.disabled = false;
        })
        current = true;
        head4.hide();
        head4.text("");
    })
    start.on('click', () => {
        buttons.each((e, target) => {
           target.innerText = "";
           target.disabled = false;
        })
        current = true;
        console.log(head);
        head.text(`Tic Tac Toe V.${count = count + 1}`);
        head4.hide();
        head4.text("");
    })
    function checkWinner() {
        let values = [];
        buttons.each(function(index, btn) {
            values.push($(btn).text());
        });
        
        const patterns = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];
    
        for (let i = 0; i < patterns.length; i++) {
            const [a, b, c] = patterns[i];
            if (values[a] && values[a] === values[b] && values[a] === values[c]) {
                return values[a];
            }
        }
    
        return null;
    }    
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
        let winner = checkWinner();
        if (winner) {
            if (winner === "X") {
                head4.css("color", "blue");
            } else {
                head4.css("color", "red");
            }
            setTimeout(() => {
                head4.text(`Congratulations! ${winner} is the winner.`);
                head4.text(`Congratulations! ${winner} is the winner.`);
                head4.show();
                buttons.prop('disabled', true);
            }, 100);
        }
    })
})