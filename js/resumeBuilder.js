var work = {
    "jobs" : [
        {
            "employer" : "ATT",
            "title" : "Tech Support Representative",
            "location" : "Englewood, CO",
            "dates" : "5/2015 - current",
            "url" : "https://www.att.com/#",
            "description" : "In a department where we are responsible for running tests for DirecTv. Anything from new troubleshooting steps, to changing phrasing or process on something we already do."
        },
        {
            "employer" : "Irish Snug",
            "title" : "Executive Chef/Kitchen Manager",
            "location" : "Denver, CO",
            "dates" : "8/2013 - 5/2015",
            "url" : "http://irishsnug.com/",
            "description" : "In charge of running kitchen for a busy bar in Denver. Responsible for writing schedules, placing food orders, managing food cost, and all hiring and firing of kitchen staff."
        },
        {
            "employer" : "McCarthy's Sports Bar",
            "title" : "Executive Chef / Kitchen Manager",
            "location" : "Aurora, CO",
            "dates" : "6/2006 - 8/2013",
            "url" : "http://www.mccarthysaurora.com/",
            "description" : "In charge of running kitchen for a sports bar in Aurora. Responsible for writing schedules, placing food orders, managing food cost, and all hiring and firing of kitchen staff. Also trained to take over for GM in his absence"
       }
    ]
};

var bio = {
    "name" : "James Solum",
    "role" : "Web Developer",
    "welcomeMessage" : "Ambition is the path to success, persistence is the vehicle you arrive in.",
    "biopic" : "images/biopic.jpg",
    "contacts" : {
        "mobile" : "720.369.4276",
        "email" : "JapSolum@hotmail.com",
        "github" : {
        	"view" : "github.com/japsolum",
        	"url" : "http://www.github.com/japsolum"
        },
        "location" : "Castle Rock, CO",
        "linkedIn" : {
        	"view" : "linkedin.com/in/james-solum-113545149/",
        	"url" : "https://www.linkedin.com/in/james-solum-113545149/"
        }
    },
    "skills" : ["HTML - 6/10", "CSS - 6/10", "JavaScript - 6/10", "Python - 3/10", "Java - 3/10"]
};

var education = {
	"schools" : [
		{
			"name" : "Hartenbach High School",
			"dates" :  "2003-2004",
			"location" :  "Aurora, CO",
			"degree" : "Diploma",
			"url" : "http://www.balfour.com/colorado/aurora/hartenbach-alternative-high-school/",
			"majors" : ["N/A"]
		},
		{
			"name" : "Rangeview High School",
			"dates" :  "2002 - 2003",
			"location" :  "Aurora, CO",
			"degree" : "N/A",
			"url" : "http://rangeview.aurorak12.org/",
			"majors" : ["N/A"]
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://printer.udacity.com/certificate/nd001"
		},
		{
			"title" : "Intro to Programming Nanodegree",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://printer.udacity.com/certificate/nd000"
		}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("#", bio.contacts.email).replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("#", bio.contacts.github.url).replace("%data%", bio.contacts.github.view);
	var formattedLinkedIn = HTMLcontactGeneric.replace("#", bio.contacts.linkedIn.url).replace("%contact%", "LinkedIn").replace("%data%", bio.contacts.linkedIn.view);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts, #footerContacts").append(formattedMobile);
	$("#topContacts, #footerContacts").append(formattedEmail);
	$("#topContacts, #footerContacts").append(formattedGithub);
	$("#topContacts, #footerContacts").append(formattedLinkedIn);
	$("#topContacts, #footerContacts").append(formattedLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}

};

 work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("#", work.jobs[i].url).replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	}
};

education.display = function(){
	for (var p = 0; p < education.schools.length; p++){
		var formattedName = HTMLschoolName.replace("#", education.schools[p].url).replace("%data%", education.schools[p].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[p].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[p].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[p].location);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedName + formattedDegree);
		$(".education-entry:last").append(formattedDates);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for (var i = 0; i < education.onlineCourses.length; i++){
		var formattedTitle = HTMLonlineTitle.replace("#", education.onlineCourses[i].url).replace("%data%", education.onlineCourses[i].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedTitle + formattedSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		
	}

};

$("#mapDiv").append(googleMap);

if (bio.skills.length > 0) {
	bio.display();
}
education.display();
work.display();
projects.display();


 