function element(tag, classname, id, text) {
    let tags = document.createElement(tag);
    tags.classList = classname;
    tags.id = id;
    tags.innerHTML = text;
    return tags;
  }
  const container = element("div","container my-5","","")
  const row=element("div","row","","")

//const main=document.getElementById("main");
const main=document.querySelector(".main");

//* api fetch:

const response=fetch("https://thronesapi.com/api/v2/Characters");
response.then((data)=>data.json())
.then((ele)=>{
    //* displaying the api data using dom 
    for(var i=0;i<ele.length;i++)
    {  
        const totalcount=ele.length;
        const a=document.createElement("div");
        a.classList="col-lg-3 col-sm-12 col-md-lg-6 mx-lg-5 my-3 ";
        a.innerHTML=`
        <div class="card ss bg-black  border">
        <img src=${ele[i].imageUrl} class="card-img" alt="...">
        <div class="card-body my-3 ">
        <p>Name : ${ele[i].fullName}</p>
        <p>Family : ${ele[i].family}</p>
        <p>Title : ${ele[i].title}
        </div>
        </div>
        `
        row.append(a);
        main.append(row);
    }
})
.catch((error)=>alert("There is no data in api"))