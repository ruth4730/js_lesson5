function searchByName()
{
    let st="";
    let name=document.getElementById('cd_name').value;
    const c=catalog.filter(x=>x.title.includes(name));
    for (let i = 0; i < c.length; i++) {
        st+=c[i].title+"<br>";
    }
    document.getElementById('showByName').innerHTML=st;
}   
const arr=catalog.reduce((prev, cur)=>{
    if(!prev.includes(cur.country))
        prev.push(cur.country);
    return prev;    
}, []).sort();
for (const item of arr) {
    document.getElementById('cd_country').innerHTML+="<option>"+item+"</option>";
}
function searchByCountry()
{
 
    let st="";
    let country=document.getElementById('cd_country').value;
    const c=catalog.filter(x=>x.country==country);
    for(let i=0; i<c.length; i++)
    {
        st+=c[i].title+" "+c[i].country+"<br>";
    }
    document.getElementById('showByCountry').innerHTML=st;
}