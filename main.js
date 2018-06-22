let isLoading = false;
let debt = 0;

const beginCalculation = ()=>{
    if(isLoading || !debt) return;
    
    document.querySelector('h2').style.opacity = 0;
    let progress = 0;
    const progressBar = document.querySelector('.progress-bar');
    const loadingPhrases = document.getElementById('bsPhrases');
    document.querySelector('button').classList.add('disabled');

    isLoading = true;

    const intervalId = setInterval(()=>{
        if(progress%20 == 0)
        {
            loadingPhrases.innerText = loading_phrase();
        }

        if(progress >= 100){
            clearInterval(intervalId);
            setTimeout(()=>{
                progressBar.setAttribute('aria-valuenow', 0);
                progressBar.style.width = "0%";
            },500);
            completeLoading();
        }
        else{
            progress += 1;
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.style.width = progress + "%";
        }
        
    }, 150);
};

const completeLoading = ()=>{
    isLoading = false;
    document.getElementById('bsPhrases').innerText = '';
    document.querySelector('button').classList.remove('disabled');
    document.querySelector('h2').style.opacity = 1;
    document.getElementById('resultHours').innerText = calculateHours();
};

const calculateHours = () => {
    return Math.round((debt/2080) + 29);
};

document.querySelector('input').onkeyup = (e)=>{
    if(e.keyCode === 13){
        beginCalculation();
        return;
    }

    debt = e.target.valueAsNumber;

    if(debt)
        document.querySelector('button').classList.remove('disabled');
    else
        document.querySelector('button').classList.add('disabled');
};

document.querySelector('button').onclick = beginCalculation;