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