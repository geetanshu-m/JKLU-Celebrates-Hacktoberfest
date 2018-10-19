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
        },{"name":"Ankit Jain","branch":"Computer Science","year":"3rd",},{"name":"Raghav Tambi","branch":"CSE","year":"3rd",},{"name":"ambuj","branch":"cse-bda","year":"2017",},{"name":"Anurag Soni","branch":"CSE-IBM","year":"Third Year",},{"name":"viral natani","branch":"CSE","year":"2017",},{"name":"Roopesh Sharma","branch":"CSE","year":"3rd",},{"name":"Pallavi","branch":"CSE","year":"3",},{"name":"Deep Contractor","branch":"CSE","year":"2017",},{"name":"Kunal Kumawat","branch":"CSE-CC","year":"3th",},{"name":"Harsh Patodia ","branch":"Computer Science and engineering ","year":"4",},{"name":"Pravesh Bisaria","branch":"CSE","year":"2017",},{"name":"Aishwaryaditya Jha","branch":"CSE","year":"1st year",},{"name":"Tanmay Mathur","branch":"Computer Science Engineering","year":"2016",},,{"name":"Prajjval Govil","branch":"Computer Science and Engineering","year":"2nd Year",},{"name":"B Shruti Mudaliar","branch":"CSE","year":"II",},{"name":"Mani Agarwal","branch":"CSE","year":"2nd",},{"name":"Roshan Kumawat","branch":"cse","year":"3rd",},{"name":"pradhuman singh","branch":"CSE","year":"2018",},{"name":"Pranjal","branch":"CSE-IBM","year":"Third year",},{"name":"Priyanshu Sharma","branch":"CSE","year":"3rd",},{"name":"Elena","branch":"branch_elena","year":"2018"},{"name":"parikshit","branch":"cse(bda)","year":"2 year",},{"name":"Ritika Roongta ","branch":"Computer_science ","year":"2017",},{"name":"Burhanuddin Bohra","branch":"computer science","year":"2",},
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