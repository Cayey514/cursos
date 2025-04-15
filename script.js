// Función para abrir el modal con el certificado
function openModal(certId) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImg');
    
    // Aquí deberías tener un mapeo de los IDs de certificado a sus imágenes
    // Esto es solo un ejemplo, deberías ajustarlo según tus necesidades
    let imgSrc = '';
    
    switch(certId) {
        case 'cert1':
            imgSrc = 'Introduction to HTML.png';
            break;
        case 'cert2':
            imgSrc = 'Introduction to CSS.png';
            break;
        case 'cert3':
            imgSrc = 'Introduction to JavaScript.png';
            break;
        case 'cert4':
            imgSrc = 'JavaScript Intermediate.png';
            break;
        case 'cert5':
            imgSrc = 'Introduction to Java.png';
             break;  
        case 'cert6':
            imgSrc = 'Java Intermediate.png';
             break;
        case 'cert7':
            imgSrc = 'Introduction to Phyton.png';
             break;
        case 'cert8':
            imgSrc = 'Phyton Intermediate.png';
             break;
        case 'cert9':
            imgSrc = 'Phyton Developer.png';
             break;
        case 'cert10':
            imgSrc = 'Intoduction to SQL.png';
            break;
        case 'cert11':
            imgSrc = 'SQL Intermediate.png';
            break;
        case 'cert12':
            imgSrc = 'Coding Foundations.png';
            break;     
        case 'cert13':
            imgSrc = '1.jpg';
            break; 
        case 'cert14':
            imgSrc = '2.jpg';
            break; 
        default:
            imgSrc = '';
    }
    
    modal.style.display = 'block';
    modalImg.src = imgSrc;
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.certificate-card');
    
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});