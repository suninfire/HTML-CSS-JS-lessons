fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value =>{
        for (const item of value) {
            const div = document.createElement('div');
            div.classList.add('namediv');
            document.body.appendChild(div);
            div.innerText = `${item.id} - ${item.name}`;

            const button = document.createElement('a');
            button.innerHTML = '<input type="button" value="more">'
            button.setAttribute('href','http://localhost:63342/JavaScriptLessons/js/mini-project/user-details.html')
            div.append(button);

            button.onclick = () => {
                localStorage.setItem('key', item.id);
               }
        }})



