
        function opentab(tabname){
            var i;
            var x=document.getElementsByClassName("mem");
            for (i=0; i<x.length; i++) {
                x[i].style.display = "none";
            }
            document.getElementById(tabname).style.display = "flex";
        }
        // Initial
        opentab("volunteer");

        function createCard([id,img,name,designition,fb,insta,linkedin,whatsapp]){
            const mem = document.getElementById(id);
            let code = `
            <div class="card">
                <div class="cardcontent">
                    <div class="imgBx">
                        <img src="${img}" alt="pic">
                    </div>
                    <div class="contentBx">
                        <h3>
                            ${name}<br><span>${designition}</span>
                        </h3>
                    </div>
                </div>
                <ul class="sci">
                    <li style="--i:1">
                        <a target="_blank" rel="noopener noreferrer" href="${fb}" >
                            <i class="fa fa-facebook-official" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:2">
                        <a target="_blank" rel="noopener noreferrer" href="${insta}">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:3">
                        <a target="_blank" rel="noopener noreferrer" href="${linkedin}">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        </a>
                    </li>
                    <li style="--i:4">
                        <a target="_blank" rel="noopener noreferrer" href="${whatsapp}">
                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>`;

            mem.innerHTML += code;
        }

        // let item1 = ["crew","../data/index/1.jpg","Dharma","Crew","https://www.google.com","https://insta","https://linkedin","https://whatsapp"];
        // let item2 = ["volunteers","../data/index/1.jpg","Dharma","Volunteer","https://www.google.com","https://insta","https://linkedin","https://whatsapp"];
        // let item3 = ["senioradv","../data/index/1.jpg","Dharma","Senior adv","https://www.google.com","https://insta","https://linkedin","https://whatsapp"];
        // let item4 = ["facultyadv","../data/index/1.jpg","Dharma","faculty adv","https://www.google.com","https://insta","https://linkedin","https://whatsapp"];
        // let l = [item1,item2,item3,item4,item4,item4,item4,item4,item4,item4,item4,item4,item4,item4,item4];
        
        
        // createCard(item1);
        // createCard(item2);
        // createCard(item3);
        // createCard(item4);

        // for (let i of l){
        //     createCard(i);
        // }


        onload = fetch("../data/team/team.csv").then(res =>{
            return res.text()
        }).then(data => {
            let result = data.split(/\r?\n|\r/).map(
                e => {
                    return e.split(",");
                }
            )
            // console.log(result);
            result.forEach(e =>{
                console.log(e);
                createCard(e);
            })
        })
        
        

        
