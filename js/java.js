const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.getElementById('peso').value
    const altura = document.getElementById('altura').value

    const bmi = (peso / (altura * altura)).toFixed(2)

    const value = document.getElementById('value')
    
    
    let descriçao = ''
    
    value.classList.add('atençao')

    document.getElementById('info').classList.remove('hidden')

    if(bmi < 18.5){
       
        descriçao = ' Cuidado! você não está no peso ideal.'
        
        
    }else if(bmi >= 18.5 && bmi <= 25){
        descriçao = 'Parabens! você está no peso ideal.'
        value.classList.remove('atençao')
        value.classList.add('normal')
    } else if(bmi >= 25 && bmi <= 30){
        
       
        descriçao = 'Cuidado! você está acima do peso.'
    } else if(bmi >= 30){
        descriçao = 'Cuidado! Você está obeso.'
        
        
    }


    value.textContent = bmi.replace('.', ',')
    document.getElementById('descriçao').textContent = descriçao

})