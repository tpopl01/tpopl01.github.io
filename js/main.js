//https://www.w3schools.com/howto/howto_css_modal_images.asp

const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const modal = document.getElementById("myModal");
const projects_div = document.getElementsByClassName("projects")[0];
const work_div = document.getElementsByClassName("projects")[1];
const vid = document.getElementById("vid");
var filter_btn = document.getElementsByClassName("btn-light")[0];
//var images = document.getElementsByClassName("myImg");

var projects = [
  {
    title: "Third Person Shooter",
    desc: "A third person shooter made in Unity.",
    desc_full:
      "This is a third person shooter created in Unity. It makes extensive use of interfaces and inheritence. During development I developed the following skills: Inverse Kinematics, C#, Unity, SUVAT equations, behaviour trees, Scriptable Objects, Singletons, extensive use of interfaces.",
    img_path: "img/projects/project1.jpg",
    vid_url: "https://www.youtube.com/embed/12j29ecMckU",
    git_link: "https://github.com/tpopl01/SBF",
    project_link:"",
    tags: ["Unity", "C#", "Blender", "Substance Painter"],
    is_work: false,
  },
  {
    title: "Prehistoric RPG",
    desc: "Role Playing Game.",
    desc_full: "This game features items, dialogue trees, questing, climb system, realistic animal behaviours, AI routines and a build system. During development I developed the following skills: Inverse Kinematics, C#, Unity, SUVAT equations, finite state machine, Scriptable Objects, Singletons, JSON to save and store data.",
    img_path: "img/projects/project2.jpg",
    vid_url: "https://www.youtube.com/embed/FLavhtvQkXA",
    git_link: "",
    project_link:"",
    tags: ["Unity", "C#", "Blender", "Substance Painter"],
    is_work: false,
  },
  {
    title: "Flask Ecommerce Horticulture Site",
    desc:
      "A Python-Flask webapp made for an ecommerce plant site.",
    desc_full: "A Python-Flask webapp made with Python, mySql, HTML and CSS. It utilises pagination, CRUD operations, blueprints, logins, wtf-forms, sqlalchemy, password hashing with salt, sql injection protection via sqlalchemy quoting special characters, CSRF and access authorization.",
    img_path: "img/projects/project3.jpg",
    vid_url: "https://www.youtube.com/embed/eky3GkzkA6I",
    git_link: "https://github.com/tpopl01/Flask-App-Horticulture-Ecommerce",
    project_link:"",
    tags: ["HTML", "CSS", "JavaScript", "mySQL", "Flask", "Python"],
    is_work: false,
  },
  {
    title: "Powered Wheelchair Simulator",
    desc:
      "A powered wheelchair simulator designed to help children learn to use a powered wheelchair.",
    desc_full: "A powered wheelchair simulator designed to help children learn to use a powered wheelchair. During development I developed the following skills: VR, C#, Unity, ability to work alongside and communicate with an Occupational Therapist in development of this product.",
    img_path: "img/projects/project4.jpg",
    vid_url: "https://www.youtube.com/embed/w0Kn6GIXVHg",
    git_link: "https://github.com/tpopl01/goldsmiths-year3-wheelchair",
    project_link:"",
    tags: ["Unity", "C#", "Blender", "Json", "VR", "Substance Painter"],
    is_work: false,
  },
  {
    title: "Allergen Detector",
    desc:
      "A small android app that scans barcodes to determine the allergens in products. During development I worked in a small group utilising the agile method and scrums.",
    desc_full: "This app scans barcodes to determine if it contains the allergen the user specifies they have. This project made use of: MVC, group work (scrum and agile), API access (openFoodFacts), Java, JSON, MySQL, database.",
    img_path: "img/projects/project5.jpg",
    vid_url: "",
    git_link: "https://github.com/tpopl01/allergyproject",
    project_link:"",
    tags: ["Java", "Android Studio", "Json", "Firebase"],
    is_work: false,
  },  
  {
    title: "Salway Preschool Webapp",
    desc: "A webapp designed for Salway Preschool.",
    desc_full:
      "This webapp is designed to be clear and informative. I created custom plugins using guttenberg blocks and a theme specific to the website. This website was designed to be familiar for and modifiable by the preschool teachers. Therefore it was designed in WordPress. During development I developed an understanding of PHP and effective communication with clients during lockdown.",
    img_path: "img/projects/work1.jpg",
    git_link: "https://github.com/tpopl01/wordpress-preschool-plugins",
    project_link:"http://salwaychristianpreschool.org.uk/",
    vid_url: "",
    tags: ["PHP", "JavaScript", "HTML", "CSS"],
    is_work: true,
  }
];


function openModal(n) {
  if (n < projects.length && n > -1) {
    // Get the modal
    var img = projects[n];
    modal.style.display = "block";
    modalImg.src = img.img_path;
    captionText.innerHTML = projects[n].desc_full;
    if(img.vid_url != "")
    {
      vid.src = img.vid_url;
      modalImg.style.display = "none";
      vid.style.display = "block";
    }
    else{
      vid.style.display = "none";
      modalImg.style.display = "block";
    }
  }
}

loadProjects();
function loadProjects() {
  clearItems();
  for (i = 0; i < projects.length; i++) {
    if(projects[i].is_work){
      loadItems(i, projects_div);
    }
    else{
      loadItems(i, work_div);
    }
  }
  hideClearFilters();
}

function displayProjectsOfTag(tag) {
  //var tag = this.innerHTML;
  //console.log(tag);
  clearItems();
  showClearFilters();
  for (i = 0; i < projects.length; i++) {
    //if (i > 2) {
    //   return;
    // }
    if (projects[i].tags.includes(tag)) {
      if(projects[i].is_work){
        loadItems(i, projects_div);
      }
      else{
        loadItems(i, work_div);
      }
    }
  }
  document.getElementById("one").scrollIntoView();
}

function clearItems() {
  var proj = document.getElementsByClassName("item");
  for (p = proj.length - 1; p > -1; p--) {
    proj[p].remove();
  }
}

function loadItems(i, parent) {
  var div = document.createElement("div");
  div.className = "item";

  var link1 = document.createElement("a");
  link1.href = "#!";
  var img = document.createElement("img");
  img.className = "myImg";
  img.src = projects[i].img_path;
  img.alt = projects[i].title;
  img.setAttribute("onclick", "openModal(" + i + ")");

  var title = document.createElement("h3");
  title.innerHTML = projects[i].title;
  var desc = document.createElement("p");
  desc.innerHTML = projects[i].desc;

  div.appendChild(link1);
  link1.appendChild(img);

  var div_button_holder = document.createElement("div");
  div_button_holder.className = "button_holder";
  div.appendChild(div_button_holder);

  if(projects[i].project_link){
    var project_link = document.createElement("a");
    project_link.href = projects[i].project_link;
    project_link.innerHTML = "Project ";
    project_link.className = "btn-light";
    var project_text = document.createElement("i");
    project_text.className = "fas fa-eye";
    div_button_holder.appendChild(project_link);
    project_link.appendChild(project_text);
  }
  
  if(projects[i].git_link){
    var git_link = document.createElement("a");
    git_link.href = projects[i].git_link;
    git_link.innerHTML = "Github ";
    git_link.className = "btn-dark";
    var git_text = document.createElement("i");
    git_text.className = "fab fa-github";
    div_button_holder.appendChild(git_link);
    git_link.appendChild(git_text);
  }

  //tags
  for (n = 0; n < projects[i].tags.length; n++) {
    var tag_link = document.createElement("a");
    tag_link.href = "#!";
    var div_tag = document.createElement("div");
    div_tag.className = "tag";
    div_tag.innerHTML = projects[i].tags[n];
    tag_link.setAttribute(
      "onclick",
      "displayProjectsOfTag(" + "'" + projects[i].tags[n] + "'" + ")"
    );
    tag_link.appendChild(div_tag);
    div.appendChild(tag_link);
  }

  div.appendChild(title);
  div.appendChild(desc);

  parent.appendChild(div);
}

function hideClearFilters() {
  filter_btn.style.display = "none";
}

function showClearFilters() {
  filter_btn.style.display = "inline-block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  vid.src = "";
};
modal.onclick = function () {
  modal.style.display = "none";
  vid.src = "";
};
captionText.onclick = function () {
  modal.style.display = "none";
  vid.src = "";
};
