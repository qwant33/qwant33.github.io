    // Reset preventClick after some delay
    document.addEventListener('mouseup', () => {
        setTimeout(() => {
            preventClick = false;
        }, 50);
    });
	
	document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        if (navLinks.style.display === 'none' || navLinks.style.display === '') {
            navLinks.style.display = 'flex';
        } else {
            navLinks.style.display = 'none';
        }
    });
});

// Hamburger Menu Toggle for Mobile
document.querySelector('.navtogglemenu').addEventListener('click', function() {
    var navbarList = document.querySelector('.navbarList');
    if (navbarList.style.display === 'none' || navbarList.style.display === '') {
        navbarList.style.display = 'flex';
    } else {
        navbarList.style.display = 'none';
    }
});

// Dropdown Menus Toggle
var menuTriggers = document.querySelectorAll('.navbarMenuTrigger');
for (var i = 0; i < menuTriggers.length; i++) {
    menuTriggers[i].addEventListener('click', function(event) {
        // Close any other open dropdowns
        var allDropdowns = document.querySelectorAll('.navbarDropdown');
        for (var j = 0; j < allDropdowns.length; j++) {
            if (allDropdowns[j] !== event.target.nextElementSibling) {
                allDropdowns[j].style.display = 'none';
            }
        }
        
        // Toggle the clicked dropdown
        var dropdown = event.target.nextElementSibling;
        if (dropdown.style.display === 'none' || dropdown.style.display === '') {
            dropdown.style.display = 'block';
        } else {
            dropdown.style.display = 'none';
        }
    });
}

// Close dropdowns when clicked outside
document.addEventListener('click', function(event) {
    var isDropdownTrigger = event.target.matches('.navbarMenuTrigger');
    var isInDropdown = event.target.closest('.navbarDropdown');

    if (!isDropdownTrigger && !isInDropdown) {
        var dropdowns = document.querySelectorAll('.navbarDropdown');
        for (var k = 0; k < dropdowns.length; k++) {
            dropdowns[k].style.display = 'none';
        }
    }
});
