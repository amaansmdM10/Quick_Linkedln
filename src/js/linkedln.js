const m=document.getElementById('search');
const n=document.getElementById('button');
const form = document.getElementById('form');


const url="https://linkedin-profile-data.p.rapidapi.com/linkedin-data?url=https%3A%2F%2Fwww.linkedin.com%2Fin%2F"

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    handleEvents();
})

function handleEvents(){
    if(window.navigator.onLine){
        const title= m.value;
        if(title){
            showMovies(url+title);
            m.value= ""
        }
    }
}
function showMovies(url){
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "linkedin-profile-data.p.rapidapi.com",
		"x-rapidapi-key": "d26c16ec25msh60377e05c7c6224p17f905jsn39530ea12707"
        /*eacb573e87msh1ace88ccd67be5ep13a6b9jsnb60e22c291c6*/
        /*86d11fbde1mshc54062e47493302p10afe2jsnd6fe06c2c9d4*/
	}
})
.then(response => response.json())
.then(link => {
    console.log(link);
    const name=link.full_name;
    const img=link.profile_pic_url;
    const headline=link.headline;
    const location=link.state;
    const summary=link.summary;
    const country=link.country;
    const list=link.volunteer_work;
    const list1=link.experiences;
    const f=link.experiences.length;
    const list2=link.certifications;
    const h=link.certifications.length;
    const m=`
    <div class="container">
    <div class="card">
    <div class="row">
    <div  class="col-5" style="display: flex; justify-content: left;">
    <img src="${img}" style="border-radius:50%; border-style:groove;" height="300" width="300" alt="picture">
    </div>
    <div style="font-size: 40px;" class="col-7">
    &nbsp;
    &nbsp;
    &nbsp;
    <strong style="display: flex;">${headline}</strong>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <div  class="card-body" style="font-size: 20px;">
      <strong>Name:</strong> ${name}
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col-12">
    <div class="card-body" style="font-size: 20px;">
      <strong>Summary:</strong> ${summary}
    </div>
    </div>
    </div>
    <br>
    <div class="row">
    <div class="col-4">
    <div class="card-body" style="font-size: 20px;">
      <strong>Location:</strong> ${location}
    </div>
    </div>
    <div class="col-4">
    <div class="card-body" style="font-size: 20px;">
      <strong>Country:</strong> ${country}
    </div>
    </div>
    </div>
    </div>
    </div>
    <br>
    
    `

    document.querySelector(' .linkedln').innerHTML =m;
    list.map((list) => {
        const k=`
            <div class="container">
            <div class="card">
                <div class="row">
                    <div class="col-4 card-body" style="font-size: 20px;">
                            <strong>Field:</strong>${list.cause}
                    </div>
                    <div class="col-8 card-body" style="font-size: 20px;">
                            <strong>Field:</strong> <img class="card-image" src="${list.logo_url}" height="150" width="150">
                    </div>
                </div>
                    <div class="col-7 card-body" style="font-size: 20px;">
                        <strong>Company:</strong>${list.company}
                    </div>
                    <div class="col-7 card-body" style="font-size: 20px;">
                        <strong>Company_Profile:</strong><a href="${list.company_linkedin_profile_url}">${list.company_linkedin_profile_url}</a>
                    </div>
                    <div class="col-7 card-body" style="font-size: 20px;">
                        <strong>Description:</strong>${list.description}
                    </div>
                   
             </div>
             </div>
             <br>
            `
                document.querySelector(' .new').innerHTML= k;
                console.log(list);  
            })
    const l=`
    <strong>Certifications</strong>
    `
    document.querySelector(' .set2').innerHTML= l;
   const t=`
   <div class="col-7 card-body" style="font-size: 20px;">
                    <strong>Work Experience</strong>
                    </div> 
   `
   document.querySelector(' .work').innerHTML= t;

    for(var i=0;i<f;i++){
    const r=`
        <div class="container">
        <div class="card">
        <div class="row">
            <div class="col-4 card-body" style="font-size: 20px;">
                    <strong>Company:</strong>${list1[i].company}
            </div>
            <div class="col-8 card-body" style="font-size: 20px;">
                    <strong>Logo:</strong> <img class="card-image" src="${list1[i].logo_url}" height="150" width="150">
            </div>
        </div>
            <div class="col-7 card-body" style="font-size: 20px;">
                <strong>Company_Profile:</strong><a href="${list1[i].company_linkedin_profile_url}">${list1[i].company_linkedin_profile_url}</a>
            </div>
            <div class="col-7 card-body" style="font-size: 20px;">
                <strong>Description:</strong>${list1[i].description}
            </div>
        <div>
       &nbsp;
     </div>
     `
     document.querySelector(' .section2').innerHTML+= r;
    }
    for(var i=0;i<h;i++){
        const g=`
            <div class="container">
            <div class="card py-5">
            <div class="row">
                <div class="col-4 card-body" style="font-size: 20px;">
                        <strong>Authority:</strong>${list2[i].authority}
                </div>
                <div class="col-8 card-body" style="font-size: 20px;">
                        <strong>Partner Company:</strong><a href="${list2[i].display_source}">${list2[i].display_source}</a>
                </div>
            </div>
                <div class="col-12 card-body" style="font-size: 20px;">
                    <strong>name_of_course:</strong>${list2[i].name}
                </div>
                <div class="col-12 card-body" style="font-size: 20px;">
                    <strong>URL: </strong>${list2[i].url}
                </div>
                <div class="row">
                 <div class="col-4 card-body" style="font-size: 20px;">
                    <strong>Starts_at: </strong>${list2[i].starts_at.month}/${list2[i].starts_at.year}
                </div>
                <div class="col-4 card-body" style="font-size: 20px;">
                    <strong>Ends: </strong>${list2[i].ends_at}
                </div>
            <div>
            &nbsp;
         </div>
         <br>
         `
         document.querySelector(' .section3').innerHTML+= g;
        }
   
})
    

.catch(err => {
	console.error(err);
}); 
}
