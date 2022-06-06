let key = localStorage.getItem('key');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users =>{
        for (const user of users) {
            if (key == user.id ){
                function foo (user){
                    for (const key in user) {
                     if (typeof user[key] === 'string' || typeof user[key] === 'number') {
                            const p = document.createElement('p');
                            document.body.appendChild(p);
                            p.innerText = `${key}: ${user[key]}`
                        }
                        else if (typeof user[key] === 'object') {
                            foo(user[key]);
                        }
                    }
                }
                foo(user);

                const div = document.createElement('div');
                div.classList.add('bDiv');

                const button = document.createElement('button');
                button.classList.add('postButton');
                button.innerText = "post of current user";

                document.body.append(div);
                div.append(button);

                button.onclick = () => {
                    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                        .then(value => value.json())
                        .then(value => {
                            const postsDiv = document.createElement('div');
                            postsDiv.classList.add('postsstyle')
                            document.body.appendChild(postsDiv);
                            for (post of value){
                                const { userId, id, title, body } = post;
                                const poost = document.createElement('div');
                                poost.classList.add('poststyle')
                                postsDiv.append(poost);
                                poost.innerText = `${title}`;
                                button.disabled = true;

                                const postButton = document.createElement('a');
                                postButton.innerHTML = '<input type="button" value="more">'
                                postButton.setAttribute('href','http://localhost:63342/JavaScriptLessons/js/mini-project/post-details.html')
                                poost.append(postButton);

                                postButton.onclick = () => {
                                    localStorage.setItem('key2', title);
                                }
                            }
                        })
                }
            }
                }
                })



