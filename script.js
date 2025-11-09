 // Función para copiar texto individual
        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification();
            }).catch(() => {
                // Fallback para navegadores que no soportan clipboard API
                const textArea = document.createElement('textarea');
                textArea.value = text;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification();
            });
        }

        // Función para copiar todos los datos
        function copyAllData() {
            const allData = `Jordan Michael Morales Alarcón
                204356343
                Mercado Pago
                Cuenta Vista
                1064651018
                jmichael.morales23@gmail.com`;

            navigator.clipboard.writeText(allData).then(() => {
                showNotification();
            }).catch(() => {
                // Fallback para navegadores que no soportan clipboard API
                const textArea = document.createElement('textarea');
                textArea.value = allData;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showNotification();
            });
        }

        // Función para mostrar notificación
        function showNotification() {
            const notification = document.getElementById('notification');
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 2000);
        }

        // Copiar automáticamente todos los datos al cargar la página
        window.addEventListener('load', () => {
            setTimeout(() => {
                copyAllData();
            }, 500);
        });