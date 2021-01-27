function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const result = document.getElementById('result');
    function onMove(ev){
        const offsetX = ev.offsetX;
        const percent = Math.floor(offsetX / ev.target.clientWidth * 100);
        result.textContent = `${percent}%`;
    }
}