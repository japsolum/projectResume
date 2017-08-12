/*var formattedName = HTMLheaderName.replace("%data%", "James Solum");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
	"name" : "James Solum",
	"role" : "Web Developer",
	"contactInfo" : ["japsolum@hotmail.com", "720.369.4276"],
	"pictureURL" : "",
	"welcomeMessage" : "Welcome to my interactive resume",
	"skills" : ["HTML", "CSS", "Javascript", "Being awesome"]

};
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contactInfo);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);

var work = {};
work.current = "Tech Support Representative";
work.employer = "ATT";
work.yearsWorked = 2;
work.workCity = "Englewood";

var education = {};
	education["schoolName"] = "Hartenbach";
	education["yearsAttended"] =  "1";
	education["schoolCity"] =  "Aurora";

$("#main").append(education.schoolName);
$("#main").append(work["current"]);*/
var work = {
    "jobs" : [
        {
            "employer" : "ATT",
            "title" : "Tech Support Representative",
            "location" : "Englewood, CO",
            "dates" : "5/2015 - current",
            "description" : "In a department where we are responsible for running tests for DirecTv. anything from new troubleshooting to changing phrasing on something we already do."
        },
        {
            "employer" : "Irish Snug",
            "title" : "Executive Chef/Kitchen Manager",
            "location" : "Denver, CO",
            "dates" : "8/2013 - 5/2015",
            "description" : "In charge of running kitchen for a busy bar in Denver. Responsible for writing schedules, placing food orders, managing food cost, and all hiring and firing of kitchen staff."
        },
        {
            "employer" : "McCarthy's Sports Bar",
            "title" : "Executive Chef / Kitchen Manager",
            "location" : "Aurora, CO",
            "dates" : "6/2006 - 8/2013",
            "description" : "In charge of running kitchen for a sports bar in Aurora. Responsible for writing schedules, placing food orders, managing food cost, and all hiring and firing of kitchen staff. Also trained to take over for GM in his absence"
       }
    ]
}

var projects = {
    "projects" : [
        {
            "title" : "Memory Game",
            "dates" : "7/2017",
            "description" : "Basic memory game where you can flip two cards and hope for a match.",
            "images" : ["memoryGame_600.jpg"]
        },
        {
            "title" : "Article Mockup",
            "dates" : "7-2017",
            "description" : "Web page that displays 6 favorite movies, basic info about them, along with poster image and a link to the trailer.",
            "images" : ["articleMock.jpg"]
        },
        {
            "title" : "Animal Card mockup",
            "dates" : "8-2017",
            "description" : "Mockup of an animal trading card designed off a pdf image.",
            "images" : ["animalCard_600.jpg"]
        }
    ]
}

var bio = {
    "name" : "James Solum",
    "role" : "Web Developer",
    "welcomeMessage" : "Welcome to my interactive resume!",
    "biopic" : "biopic.jpg",
    "contacts" : {
        "Mobile" : "720.369.4276",
        "Email" : "JapSolum@gmail.com",
        "Github" : "github.com/japsolum",
        "location" : "Castle Rock, CO"
    },
    "skills" : ["HTML", "CSS", "JavaScript", "Python", "Java"]
}

//example of valid json
var education = {
	"schools" : [
		{
			"name" : "Hartenbach High School",
			"degreeDates" :  "2004",
			"location" :  "Aurora, CO",
			"graduated" : "Diploma",
			"url" : "http://www.balfour.com/colorado/aurora/hartenbach-alternative-high-school/",
			"majors" : "N/A"
		},
		{
			"schoolName" : "Rangeview High School",
			"yearsAttended" :  "2002 - 2004",
			"schoolCity" :  "Aurora, CO",
			"graduated" : "N/A",
			"url" : "http://rangeview.aurorak12.org/",
			"majors" : "N/A"
		}
	],
	"onlineCourse" : [
		{
			"title" : "Front-End Web Developer",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"title" : "Intro to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		}
	]
};

if (bio.skills.length > 0) {
	var name = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(name);
	$("#header").append(HTMLskillsStart);
	var formattedSkill = "";
	for (var i = 0; i < bio.skills.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	};

}

 function displayWork() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data", work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	};
};
displayWork();