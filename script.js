function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
function add_elements(){
    let data = [
        {
            "name":"Geetanshu Mathur",
            "branch":"Computer Science and Engineering (VII Semester)",
            "year" : "2015"
        },
        {
            "name":"Sarthak Vijayvergiya",
            "branch":"Computer Science and Engineering (VII Semester)",
            "year":"2015"
        },{"name":"ambuj","branch":"cse-bda","year":"2017",},{"name":"Anurag Soni","branch":"CSE-IBM","year":"Third Year",},{"name":"Roopesh Sharma","branch":"CSE","year":"3rd",},{"name":"Kunal Kumawat","branch":"CSE-CC","year":"3th",},{"name":"Harsh Patodia ","branch":"Computer Science and engineering ","year":"4",},{"name":"Pravesh Bisaria","branch":"CSE","year":"2017",},{"name":"Tanmay Mathur","branch":"Computer Science Engineering","year":"2016",},{"name":"Prajjval Govil","branch":"Computer Science and Engineering","year":"2nd Year",},{"name":"Mani Agarwal","branch":"CSE","year":"2nd",},{"name":"Roshan Kumawat","branch":"cse","year":"3rd",},{"name":"Pranjal","branch":"CSE-IBM","year":"Third year",},{"name":"Priyanshu Sharma","branch":"CSE","year":"3rd",},{"name":"Elena","branch":"branch_elena","year":"2018"},{"name":"Ritika Roongta ","branch":"Computer_science ","year":"2017",},{"name":"Burhanuddin Bohra","branch":"computer science","year":"2",},
    ]
    par = document.getElementById("participants")
    data.forEach(element => {
        var student  = document.createElement("div");
        student.className = "student"

        var name = document.createElement("div");
        name.className = "name";
        name.appendChild(document.createTextNode(element.name));

        var branch = document.createElement("div");
        branch.className = "branch";
        branch.appendChild(document.createTextNode(element.branch));

        var year = document.createElement("div");
        year.className = "year";
        year.appendChild(document.createTextNode(element.year));

        student.appendChild(name);
        student.appendChild(branch);
        student.appendChild(year);

        par.appendChild(student);
    });
}
add_elements()