





let currencyRatio = {   //여러값으로 배열을 하고싶을땐 객체를 씀
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40,
        unit:"원"
    },
    VND:{
        VND:1,
        KRW:0.052,
        USD:0.000044,
        unit:"동"
    }
};                      //배열안에있는건 지금 객체타입임

// console.log(currencyRatio.USD.unit);


// console.log(currencyRatio["VND"]["unit"]);

let fromCurrency = 'USD';
let toCurrency = 'USD';
 
document.querySelectorAll("#fromCurrencyList a")
.forEach(menu=>menu.addEventListener("click",function(){
        document.getElementById("fromBtn").textContent = this.textContent;

        fromCurrency = this.textContent;
       // console.log(fromCurrency);
       convert();
    })
);

document.querySelectorAll("#toCurrencyList a")
.forEach(menu=>menu.addEventListener("click", function(){
    document.getElementById("toBtn").textContent = this.textContent;

    toCurrency= this.textContent;
   // console.log("2번째", toCurrency)
   convert();
}));

// 환전
function convert(){
    let amount = document.getElementById("fromInput").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

    console.log("환전 결과!", convertedAmount);

    document.getElementById("toInput").value = convertedAmount;

}

//1. 드랍다운 리스트에 값이 봐뀔때마다
//2. 환전을 다시한다




















