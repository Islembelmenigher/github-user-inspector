document.getElementById("search").addEventListener("click", async()=>{
    const user= document.getElementById("username").value.trim();
    if(!user) return; 
    try{
        const res = await axios.get(`http://localhost:5000/api/user/${user}`);
        const Data = res.data;

        document.getElementById("result").innerHTML= `
        <div calss ="card">
        <img src="${Data.avatar_url}">
        <h3><strong>Name: </strong>${Data.name || Data.login}</h3>
        <p> ${Data.bio || "No bio available"}</p>
        <p> <strong>Public Repos: </strong> ${Data.public_repos}</p>
        <p> <strong>followers: </strong> ${Data.followers}</p>
        <p> <strong>following: </strong> ${Data.following}</p>
        <p> <strong>Account Type: </strong> ${Data.type}</p>
        <p> <strong>Account was created on : </strong> ${Data.created_at}</p>
        <p> <strong>Last activity was on : </strong> ${Data.updated_at}</p>
        
        </div>    `;
    } catch(e){
        Document.getElementById("result").innerHTML ="<p> User was not found </p>"
    }
});