const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

const acordeonTriggersIn = document.querySelectorAll('.acordeon-vida .trigger-vida')

acordeonTriggers.forEach((trigger) => {

    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement

        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})

acordeonTriggersIn.forEach((trigger) => {

    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement

        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})