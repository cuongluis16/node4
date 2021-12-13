$(() => {
    const url = ''
    let socket = io.connect(url)
    console.log(socket)

    const message = $('#message')
    const chatList = $('#chatList')

    socket.on('message', (data) => {
        console.log(data)
        let chatElement = $('<p>').append(data.message)
        chatList.prepend(chatElement)
    })

    $('#send').on('click', () => {
        if (!message.val()) return
        socket.emit('message', {
            message: message.val()
        })
        message.val('')
    })
})