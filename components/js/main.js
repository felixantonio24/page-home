const text = document.querySelector('.tittle')
const textLoad =() =>{
    setTimeout(()=>{
        text.textContent ='Welcome to Perú'
    }, 0)
    setTimeout(() =>{
        text.textContent = 'Contry Gastonomic'}, 4000);
        setTimeout(() => {
            text.textContent ='Full of Fulture'
        },8000);

        setTimeout(() =>{
            text.textContent ='Full of Stories'
        },12000);
}
textLoad();
setInterval(textLoad, 24000);


