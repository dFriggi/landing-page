document.addEventListener('DOMContentLoaded', () => {
    const tabTriggers = document.querySelectorAll('.tab-trigger')

    tabTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {

            tabTriggers.forEach(t => t.classList.remove('active'))
            document.querySelectorAll('.tab-prof').forEach(p => p.classList.remove('active'))

            trigger.classList.add('active')

            const targetAtribute = trigger.getAttribute('data-tab-reference')

            console.log("Botão clicado! Procurando pelo seletor:", targetAtribute);

            const targetTab = document.querySelector(targetAtribute)

            console.log("Painel encontrado:", targetTab);
            
            if(targetTab){
                targetTab.classList.add('active')
            } else {
                console.error("ERRO: Não foi possível encontrar o painel. Verifique o ID e o data-tab-reference!");
            }
        })
        

    })
})