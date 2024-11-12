function searchByName()
{
    let name=document.getElementById('cd_name').value;
    const c=catalog.filter(x=>x.title.includes(name));
    document.getElementById("t").innerHTML="";
    const arr=c.map(x=>mytable(x));
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
    let country=document.getElementById('cd_country').value;
    const c=catalog.filter(x=>x.country==country);
    document.getElementById("t").innerHTML="";
    const arr=c.map(x=>mytable(x));
}
function searchByYear()
{
    let f=document.getElementById('from').value;
    let t=document.getElementById('to').value;
    const c=catalog.find(x=>x.year>=f && x.year<=t);
    document.getElementById("t").innerHTML="";
    mytable(c);
}
function mytable(d)
{
    document.getElementById("t").innerHTML+="<tr>"+"<td>"+d.title+"</td>"+"<td>"+d.artist+"</td>"+"<td>"+d.country+"</td>"+"<td>"+d.company+"</td>"+"<td>"+d.price+"</td>"+"<td>"+d.year+"</td>"+"</tr>"    
}