interface MessageInterface {
    time?: number,
    message: string
}

export function Message(options: MessageInterface) {
    const defaultTime = 1500

    var notice = document.createElement('div')
    notice.style.position = 'fixed'
    notice.style.top = '0'
    notice.style.transition = 'all 300ms'
    notice.style.left = '50%'
    notice.style.transform = 'translate(-50%)'

    notice.innerHTML = `<div class="alert alert-danger" style="
                            color: #a94442;
                            background-color: #f2dede;
                            border-color: #ebccd1;
                            padding: 15px;
                            border: 1px solid transparent;
                            border-radius: 4px;" role="alert">
                            ${options.message}
                        </div>`

    document.body.appendChild(notice)

    setTimeout(function() {
        document.body.removeChild(notice)
    }, options.time || defaultTime)
}