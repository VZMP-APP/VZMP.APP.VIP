// Matrix background effect
const canvas = document.getElementById('matrix');
if (canvas) {
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = "01010101010101010101010101010101";
    const charArray = chars.split("");
    
    const font_size = 14;
    const columns = canvas.width / font_size;
    
    const drops = [];
    
    for(let x = 0; x < columns; x++)
        drops[x] = 1;
    
    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = "#0FF";
        ctx.font = font_size + "px arial";
        
        for(let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * font_size, drops[i] * font_size);
            
            if(drops[i] * font_size > canvas.height && Math.random() > 0.975)
                drops[i] = 0;
            
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Cursor animation
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        setTimeout(() => {
            cursor.style.animation = 'none';
            setTimeout(() => {
                cursor.style.animation = 'blink 1s infinite';
            }, 500);
        }, 3500);
    }
});
