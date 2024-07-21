//hola soy un comentario
   
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    const parrafito = document.querySelector('.parrafito');
    const pid = document.querySelector('#pid');
    const input = document.querySelector('input');

    console.log(h1.innerHTML);




    console.log({
        h1,
        p,
        parrafito,
        pid,
        input,
    })


    h1.innerHTML = 'Hola yo lo cambie';
    console.log(h1.getAttribute('class','pepe'));
    h1.setAttribute('class', 'pepe');

    h1.classList.add('rojo');

    h1.classList.remove('pepe');


    input.value = 'HOla soy un texto xd';


    const img = document.createElement('img');

    img.setAttribute('src','https://cdn.pixabay.com/photo/2023/11/03/19/59/malaysian-tiger-8363779_1280.jpg');


    pid.append(img);
