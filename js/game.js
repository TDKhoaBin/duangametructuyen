let flagCnt = false;
let flagPts = false;
let cntP;
let cnts = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomInt = getRandomInt(1, 100);


function kiemTraDiem() {
    let pay = Number($('.payNum').val());
    let point = Number($('.points').text());

    if (pay <= point) {
        flagPts = true;
    }
    else {
        alert("Bạn không đủ điểm để chơi hoặc số điểm không hợp lệ! Vui lòng thêm điểm hoặc nhập lại!");
    }
}

function kiemTraDem() {
    let cnt = Number($('#cnt').val());

    if (cnt >= 0) flagCnt = true;
}

function kiemTra(flagCnt, flagPts) {
    if (flagCnt == true && flagPts == true) {
        $('.questionAnswer').removeClass('hidden');
        $('.Answer').removeClass('hidden');

        $('.payTaskbar').addClass('hidden');
        $('.numTaskbar').addClass('hidden');
    }
}

function kiemTraSo(randomInt, answer) {
    if (randomInt == answer) {
        alert("Chúc mừng bạn đã đoán đúng!");

        let pay = Number($('.payNum').val());
        let point = Number($('.points').text());

        $('.points').html(point + pay);


        if (confirm("Bạn có muốn tiếp tục không?") == true) {

            khoiTao();

        }
        else {
            $('.resetBtn').removeClass('hidden');
        }
    }
    else if (randomInt > answer) {
        let maxNum = $('.maxNum').html();

        $('.sNum').html(`<span class="minNum">${answer}</span> - <span class="maxNum">${maxNum}</span>`);
    }
    else if (randomInt < answer) {
        let minNum = $('.minNum').html();

        $('.sNum').html(`<span class="minNum">${minNum}</span> - <span class="maxNum">${answer}</span>`);


    }
}

function khoiTao() {
    flagCnt = false;
    flagPts = false;

    $('.questionAnswer').addClass('hidden');
    $('.Answer').addClass('hidden');

    $('.payTaskbar').removeClass('hidden');
    $('.numTaskbar').removeClass('hidden');

    randomInt = getRandomInt(1, 100);
    cnts = 0;
    cntP = Number($('#cnt').val());
    $('.sNum').html(`<span class="minNum">1</span> - <span class="maxNum">100</span>`);

}

window.onload = function () {

    $('.checkBtn').click(function () {

        kiemTraDem();
        cntP = Number($('#cnt').val());

        kiemTra(flagCnt, flagPts);
    });

    $('.payBtn').click(function () {
        kiemTraDiem();
        kiemTra(flagCnt, flagPts);

    });


    $('.checkNum').click(function () {


        if (cnts < cntP) {
            let answer = Number($('.pNum').val());
            console.log(randomInt);
            kiemTraSo(randomInt, answer);
            cnts++;

        }
        else {
            let answer = Number($('.pNum').val());

            if (answer == randomInt) {
                alert("Chúc mừng bạn đã đoán đúng!");

                let pay = Number($('.payNum').val());
                let point = Number($('.points').text());

                $('.points').html(point + pay);

                if (confirm("Bạn có muốn tiếp tục không?") == true) {

                    khoiTao();

                }
                else {
                    $('.resetBtn').removeClass('hidden');
                }
            }

            else {
                alert("Bạn đã hết lượt chơi!");
                if (confirm("Bạn có muốn chơi lại không?") == true) {

                    khoiTao();

                    let pay = Number($('.payNum').val());
                let point = Number($('.points').text());

                $('.points').html(point - pay);

                }
                else {
                    $('.resetBtn').removeClass('hidden');
                }
            }
        }
    });

    
    $('.pNum').focus(function () {
        if(cnts+1 > cntP)
        {
            $('.count').text(`${cnts + 1} (lần cuối)`);

        }
        else
        {
            $('.count').text(`${cnts + 1}`);
        }

    });

    $('.addBtn').click(function(){
        let pts = Number(prompt("Nhập số điểm muốn thêm: "));
        let point = Number($('.points').text());

        $('.points').html(point + pts);


    });

    $('.resetBtn').click(function(){
        $(this).addClass('hidden');
        khoiTao();
    });


};