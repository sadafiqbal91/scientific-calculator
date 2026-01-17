var result = document.getElementById("result");
var historyList = [];
var memory = 0;
var isRadian = false;

function display(number) {
    result.value += number;
}

function calculate() {
    try {
        var expression = result.value.replace(/X/g, '*');
        var final_result = eval(expression);

        // Add to history
        if (result.value !== "") {
            historyList.push(`${result.value} = ${final_result}`);
            if (historyList.length > 5) historyList.shift();
            updateHistoryUI();
        }

        result.value = final_result;
    } catch (error) {
        result.value = "Error";
    }
}

function updateHistoryUI() {
    const historyContainer = document.getElementById('history-list');
    if (historyContainer) {
        historyContainer.innerHTML = historyList.map(item => `<div>${item}</div>`).reverse().join('');
    }
}

function toggleHistory() {
    const panel = document.getElementById('history-panel');
    panel.classList.toggle('open');
}

function memAdd() {
    memory += parseFloat(eval(result.value) || 0);
}

function memSub() {
    memory -= parseFloat(eval(result.value) || 0);
}

function memClear() {
    memory = 0;
}

function memRecall() {
    result.value = memory;
}

function square() {
    result.value = Math.pow(eval(result.value.replace(/X/g, '*')) || 0, 2);
}

function sqrt() {
    result.value = Math.sqrt(eval(result.value.replace(/X/g, '*')) || 0);
}

function percentage() {
    result.value = (eval(result.value.replace(/X/g, '*')) || 0) / 100;
}

function sin() {
    let val = eval(result.value.replace(/X/g, '*')) || 0;
    result.value = isRadian ? Math.sin(val) : Math.sin(val * Math.PI / 180);
}

function cos() {
    let val = eval(result.value.replace(/X/g, '*')) || 0;
    result.value = isRadian ? Math.cos(val) : Math.cos(val * Math.PI / 180);
}

function tan() {
    let val = eval(result.value.replace(/X/g, '*')) || 0;
    result.value = isRadian ? Math.tan(val) : Math.tan(val * Math.PI / 180);
}

function log() {
    result.value = Math.log10(eval(result.value.replace(/X/g, '*')) || 0);
}

function ln() {
    result.value = Math.log(eval(result.value.replace(/X/g, '*')) || 0);
}

function pi() {
    result.value += Math.PI.toFixed(4);
}

function euler() {
    result.value += Math.E.toFixed(4);
}

function factorial() {
    let n = parseInt(eval(result.value.replace(/X/g, '*')) || 0);
    if (n < 0) return result.value = "Error";
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    result.value = res;
}

function power() {
    result.value += "**";
}

function toggleMode() {
    isRadian = !isRadian;
    document.getElementById('mode-indicator').innerText = isRadian ? 'RAD' : 'DEG';
}
function clrs() {
    result.value = "";
}

function dle() {
    result.value = result.value.slice(0, -1);
}
