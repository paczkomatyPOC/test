function afterPointSelected(point) {
    console.log({point}); 
}


document.addEventListener('onpointselect', (event) => console.log({details: event.details}));