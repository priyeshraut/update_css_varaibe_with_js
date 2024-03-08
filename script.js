const inputs = document.querySelectorAll('input')

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(elem => {
    elem.addEventListener('change', handleUpdate)
    elem.addEventListener('mousemove', handleUpdate)
})