let button=document.querySelector("#button");
let answer_box=document.querySelector(".answer");
let body=document.querySelector('body');
let title=document.querySelector('#title');
console.log(body);

button.addEventListener('click',()=>{
    url='https://www.potterapi.com/v1/sortingHat';
    fetch(url)
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            
            var house=document.createElement('p');
            house.innerHTML=data;
            console.log(data);
            answer_box.appendChild(house);

            if(data=="Gryffindor"){
                body.classList.add('show_gry');
                button.classList.add('hide_btn');
                title.classList.add('hide_btn');
                house.classList.add('scaleit');
            }
            if(data=="Slytherin"){
                body.classList.add('show_sly');
                button.classList.add('hide_btn');
                title.classList.add('hide_btn');
                house.classList.add('scaleit');
            }
            if(data=="Hufflepuff"){
                body.classList.add('show_huf');
                button.classList.add('hide_btn');
                title.classList.add('hide_btn');
                house.classList.add('scaleit');
            }
            if(data=="Ravenclaw"){ 
                body.classList.add('show_rav');
                button.classList.add('hide_btn');
                title.classList.add('hide_btn');
                house.classList.add('scaleit');
            }


        })

})