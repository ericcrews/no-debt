const beginCalculation = ()=>{
    let progress = 0;
    const progressBar = document.querySelector('.progress-bar');

    const intervalId = setInterval(()=>{
        if(progress >= 100){
            clearInterval(intervalId);
        }
        else{
            progress += 1;
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.style.width = progress + "%";
        }
        
    }, 100);
};

const calculateHours = (debt) => {
    return (debt/2080) + 29;
};

document.querySelector('button').onclick = ()=>{
    console.log("You clicked it");
    beginCalculation();
};