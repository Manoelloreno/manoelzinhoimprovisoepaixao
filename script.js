document.addEventListener("DOMContentLoaded", () => {
        console.log("Iniciando cronômetro...");
    
        const countdownElement = document.getElementById("countdown");
        const targetDate = new Date("2025-06-06T19:00:00").getTime();
    
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
    
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((distance / (1000 * 60)) % 60);
                const seconds = Math.floor((distance / 1000) % 60);
    
                countdownElement.innerText = 
                    `${days}d ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            } else {
                countdownElement.innerText = "Estreia!";
            }
    
            requestAnimationFrame(updateCountdown); // Atualiza continuamente
        }
    
        // Atualiza imediatamente ao carregar, sem esperar
        updateCountdown();
  
    
    const bgGif = document.getElementById("background-gif");
    const trailer = document.getElementById("trailer-container");

    function checkScroll() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollPosition > windowHeight * 0.6) { 
            bgGif.classList.add("hide-bg"); // Oculta o fundo GIF
            trailer.style.opacity = "1"; // Mostra o trailer
            trailer.style.visibility = "visible"; // Garante exibição
        } else {
            bgGif.classList.remove("hide-bg"); // Mantém o fundo visível
            trailer.style.opacity = "1"; // Mantém visível
            trailer.style.visibility = "visible"; // Garante que não seja ocultado
        }
    }

    window.addEventListener("scroll", checkScroll);
});
