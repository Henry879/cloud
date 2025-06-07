const modoBtn = document.getElementById('modo-btn');
        const body = document.body;

        // Aplicar modo claro si está guardado en localStorage
        if (localStorage.getItem('modo') === 'claro') {
            body.classList.add('modo-claro');
        }

        // Alternar clase y guardar la preferencia
        modoBtn.addEventListener('click', () => {
            body.classList.toggle('modo-claro');

            if (body.classList.contains('modo-claro')) {
                localStorage.setItem('modo', 'claro');
            } else {
                localStorage.setItem('modo', 'oscuro');
            }
        });