let ultasks= $('#ultasks')
let btnAdd=$('#btnAdd')
let btnClear=$('#btnClear')
let inputnewtask=$('#inputnewtask')

btnAdd.click(() => {
    let listitem= $('<li>',{
        'class': 'list-group-item',
        text: inputnewtask.val()
    })

    ultasks.append(listitem)
    inputnewtask.val("")
})
btnClear.click(() => {
    
}





)