$(document).ready(function() {
	var tools = [{
		name: "Human assistance",
		description: "Your personal assistant has the solution for your technical problem - whether it is a minor annoyance or a catastrophic failure.",
		image: "img/1.png",
		link: "#"
	}, {
		name: "Internet security",
		description: "Protect your Mac from phishing attacks, malware, spyware, adware, viruses and identity theft while you're using the Internet.",
		image: "img/2.png",
		link: "#"
	}, {
		name: "Anti-theft",
		description: "If your Mac gets stolen, Anti-Theft will track its location and even make an iSight snapshot of the thief.",
		image: "img/3.png",
		link: "#"
	}, {
		name: "Fast cleanup",
		description: "Quickly remove junk files (such as temporary caches, logs, unused language packages and legacy application parts) that may take up hard drive space and slow down your Mac.",
		image: "img/4.png",
		link: "#"
	}, {
		name: "Duplicates finder",
		description: "Delete unnecessary copies of your files and free up disk space on your Mac.",
		image: "img/5.png",
		link: "#"
	}, {
		name: "Geek on demand",
		description: "Geek on Demand is the ultimate tool when you have a problem or question that is related to your Mac's health and need an expert's opinion or technical assistance.",
		image: "img/6.png",
		link: "#"
	}, {
		name: "Update tracker",
		description: "With Update Tracker you will never miss out any important security patches and upgrades for most of your applications.",
		image: "img/7.png",
		link: "#"
	}, {
		name: "Backup",
		description: "Backing up your important files and folders is an easy, fast and reliable way to keep them safe and secure.",
		image: "img/8.png",
		link: "#"
	}, {
		name: "Files recovery",
		description: "Now you can recover files that were once deleted from the Trash!",
		image: "img/9.png",
		link: "#"
	}, {
		name: "Disk usage",
		description: "Visualize the size of the folders on your hard drive so you can tell at a glance which folders are taking up the most space.",
		image: "img/10.png",
		link: "#"
	}, {
		name: "Smart uninstaller",
		description: "Prevent future junk by making sure that you're not just sweeping old applications under the rug when you are trying to delete them.",
		image: "img/11.png",
		link: "#"
	}, {
		name: "Data encryptor",
		description: "Make your restricted files absolutely invisible to anyone without the right password, protecting even your most sensitive information.",
		image: "img/12.png",
		link: "#"
	}, {
		name: "Default apps",
		description: "The easiest way to define which application will open each file type.",
		image: "img/13.png",
		link: "#"
	}, {
		name: "Shredder",
		description: "Securely delete files and folders that you don't ever want to be recovered.",
		image: "img/14.png",
		link: "#"
	}, {
		name: "Files finder",
		description: "Quickly search for and find any lost or misplaced file, even if you don't know in which folder it is located.",
		image: "img/15.png",
		link: "#"
	}, {
		name: "Login items",
		description: "Take control of how fast your Mac boots up by deciding which applications launch every time you start it.",
		image: "img/16.png",
		link: "#"
	}, {
		name: "Memory Cleaner",
		description: "Automatically optimizes and monitors your Mac’s RAM memory while you are performing your daily tasks.",
		image: "img/17.png",
		link: "#"
	}];

	function createHex() {
		for (var i = 0; i < tools.length; i++) {
			if (i % 10 == 0 && i != 0) {
				$('.macTools .inner .left').append('<div class="hex"><img src="' + tools[i].image + '"></div><br>')
			} else {
				$('.macTools .inner .left').append('<div class="hex"><img src="' + tools[i].image + '"></div>')
			}
		};
		hexHeight()
	};

	function hexHeight() {
		var width = $('.hex').width();
		var height = width / 1.7;
		$('.hex').css('height', height);
	};

	$(window).resize(function() {
		hexHeight();
	});


	createHex();



	$('.hex').on('click', function() {
		tool = $(this).index('.hex');
		choseTool()

	});

	var tool = 0;

	function choseTool() {
		$('.hex').removeClass('activeTool');
		$('.hex').eq(tool).addClass('activeTool');
		$('.toolImg').attr('src', tools[tool].image);
		$('.toolName').html(tools[tool].name);
		$('.toolDescription').html(tools[tool].description);
		$('.toolLink').attr('href', tools[tool].link);


	};
	choseTool()
});