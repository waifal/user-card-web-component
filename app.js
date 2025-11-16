// Composites
import './composites/TeamSection.js';

// DOM Injection
function insertTemplateToDOM() {
    const xhr = new XMLHttpRequest();

    xhr.responseType = "text";
    xhr.onload = function() {
        if(xhr.status !== 200) {
            console.error('Could not load template to the DOM! Current status:', xhr.status + ' : ' + xhr.statusText);
            return;
        }

        document.getElementById('app').innerHTML = xhr.responseText;
    }

    xhr.open('GET', './template/home.html', true);
    xhr.send(null);
}

insertTemplateToDOM();