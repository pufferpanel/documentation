setTimeout(function () {
    var crumbRight = document.getElementsByClassName('wy-breadcrumbs-aside')[0]
    var sourceLink = crumbRight.children[0]
    var p = document.createElement('p')
    p.appendChild(sourceLink)
    var copy = document.querySelector('[role="contentinfo"]')
    copy.prepend(p)

    var toggleInput = document.createElement('input')
    toggleInput.type = 'checkbox'
    var userPref = localStorage.getItem('theme')
    toggleInput.checked = userPref ? userPref === 'dark' : false
    toggleInput.addEventListener('change', function (e) {
        var cl = document.getElementsByTagName('body')[0].classList
        if (e.target.checked) {
            cl.remove('light')
            cl.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            cl.remove('dark')
            cl.add('light')
            localStorage.setItem('theme', 'light')
        }
    })

    var toggleVisual = document.createElement('span')
    toggleVisual.classList.add('switch')

    var wrapper = document.createElement('label')
    wrapper.classList.add('dark-toggle')

    wrapper.appendChild(toggleInput)
    wrapper.appendChild(toggleVisual)

    crumbRight.appendChild(wrapper)
    document.getElementsByTagName('body')[0].classList.add(toggleInput.checked ? 'dark' : 'light')
}, 0)
