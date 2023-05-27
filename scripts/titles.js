var messages = [
    "have Joy",
    "Find Peace",
    "have some Rest",
    "be comforted",
    "be Blessed"
]

// Event listener

let saveB = document.querySelector("#save");
let refreshB = document.querySelector("#refresh");
let quitB = document.querySelector("#quit");

saveB.addEventListener("click", (e) => {
    main();
});
refreshB.addEventListener("click", (e) =>{
    refreshAll();
});

quitB.addEventListener("click", (e) =>{
    quit();
})

// The main function calling other functtions
function main()
{
    userInfo();
    let r = getUrl();
    get_music(r)
    .then(d => {
        let song_num = document.querySelector("#song_number").value;

        if(song_num <= 10){
       
            for(let item of d.results)
            {
                let ol1 = document.querySelector("#resut_item");
                let li1 = document.createElement("li");

                let song = item["trackName"]
                li1.textContent = song;
                li1.style.color = "springgreen"
                ol1.appendChild(li1);
                console.log(song)
            }
        }
        
    })
   

}

// the first fuunction deals with the user personal information 

function userInfo(){

    let rend = Math.floor(Math.random() * messages.length);
    let user_mess = document.querySelector("#user_message");
    let user_country = document.querySelector("#country").value;
    let first_name = document.querySelector("#name1");
    let last_name = document.querySelector("#name2");
    if (rend < messages.length){
        user_mess.textContent = "Hello " +  first_name.value + " " + last_name.value + " From " +  user_country +
        " We hope you will " + messages[rend] + " with: ";
    }
    else{
        user_mess.textContent = "Hello " +  first_name.value + " " + last_name.value + " We hope you will Have Fun!";
    }
   
} 

// The second function deals the artist information
function getUrl(){

    let art_name = document.querySelector("#name3").value;
    let art_country = document.querySelector("#art_country").value;
    let song_num = document.querySelector("#song_number").value;

    let url = "https://itunes.apple.com/search?entity=song&term=" + art_name +
    "&country=" + art_country + "&limit=" + song_num;
    // let url = "www.google.com";
    return url
   
} 

// async function
async function get_music(url)
{
    let jsonResult = await fetch(url)
    let data = await jsonResult.json();
    return data
}

function refreshAll()
{
    document.location.reload()
}

function quit()
{
    let first_name = document.querySelector("#name1").value;
    let user_country = document.querySelector("#country").value;

    
    

    document.write("Thank you so much " + first_name + "  from " + 
    " for you time see you soon. "+ "Have a good time in " + user_country);
    let body = document.querySelector("body");
    body.style.backgroundColor = "#123";
    body.style.color = "white";
    body.style.fontFamily = "Georgia";
    body.style.fontSize = "50px";
    body.style.margin = "0px, auto";
    body.style.textAlign = "center";

}

// those two function are not used in this program
// deal with json result 

// function dealwithjson(data)
// {

//     let r = data.results;
//     return r

// }

// function displayrResults(datas)
// {
//     for(let obj in datas)
//     {
//         let item = obj["trackName"]
//         console.log(item)
//     }
// }


