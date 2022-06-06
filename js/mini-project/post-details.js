let key = localStorage.getItem('key');
let key2 = localStorage.getItem('key2');
fetch(`https://jsonplaceholder.typicode.com/users/${key}/posts`)
    .then(value => value.json())
    .then(value =>{
        const divka = document.createElement('div');
        divka.classList.add('main');
        document.body.appendChild(divka);
        for (const post of value) {
            if (post.title == key2){
                for (keys in post){
                    const p = document.createElement('p');
                    divka.append(p);
                    p.innerText = `${keys}: ${post[keys]}`;
                }

                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(value => value.json())
                    .then(value =>{
    const comments = document.createElement('div');
    comments.classList.add('comdiv')
    document.body.appendChild(comments);
    for (it of value){
        const comDiv = document.createElement('div');
        comDiv.classList.add('coments');
        comments.append(comDiv);
            comDiv.innerText = `postId: ${it.postId} 
            id: ${it.id}
            name: ${it.name}
            email: ${it.email}
            body: ${it.body}`
    }
                    })
            }
        }
        })

