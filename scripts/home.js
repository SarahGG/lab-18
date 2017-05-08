window.onload = printSkills();

function printSkills() {
    loadSkills();
    printLists();
}
function loadSkills() {
    window.backEndSkills = ['Java ', 'JDOC ', 'JSP ', 'JSTL ', 'JDBC ', 'EL ', 'Spring MVC ', 'Tomcat', 'Hibernate ', 'MySQL ', 'NoSQL ', 'Microsoft Query '];
    window.frontEndSkills = ['CSS/CSS3 ', 'Sass ', 'HTML/HTML5 ', 'XML ', 'Javascript ', 'JQuery ', 'Bootstrap ', 'DOM ', 'Mobile-First '];
    window.productionSkills = ['OOP ', 'TDD ', 'IntelliJ ', 'Atom ', 'Eclipse ', 'Maven ', 'Process Documentation ', 'SalesForce ', 'Git ', 'GitHub ', 'Apache '];
    window.designSkills = ['Photoshop ', 'Illustrator ', 'Content Editing ', 'Accessible Design ', 'UI/UX ', 'Typography '];
    window.homeMakingSkills = ['Interior & Exterior Design ', 'Home-Made Italian Cuisine ', 'Home Repair ', 'Gardening ', 'Baby-Sitting '];
    window.husbandrySkills = ['Rehoming ', 'Fostering ', 'Reptiles ', 'Amphibians ', 'Adoption ', 'Mammals ', 'Birds ', 'Farm Livestock ', 'Enclosure Maintenance ', 'Dog-Sitting '];
    window.tradeSkills = ['Remodeling ', 'Restoration ', 'Re-purposing Materials ', 'Furniture ', 'Cabinetry ', 'Landscaping '];
}
function printLists() {
    printList(backEndSkills, 'back-end-list', 'Back-End');
    printList(frontEndSkills, 'front-end-list', 'Front-End');
    printList(productionSkills, 'production-list', 'Production');
    printList(designSkills, 'design-list', 'Design');
    printList(homeMakingSkills, 'home-making-list', 'Home-Making');
    printList(husbandrySkills, 'husbandry-list', 'Husbandry');
    printList(tradeSkills, 'trade-skill-list', 'Trade Skills');
}
function printList(skillArray, skillList, title) {
    // ex: back-end-list
    var parentID = document.getElementById(skillList);

    // a box to hold each section title and contents
    var skillHolder = document.createElement('div');
    skillHolder.className = 'skill-cap';

    //creating title element
    var titleText = document.createTextNode(title);
    var titleDiv = document.createElement('div');
    titleDiv.className = 'section-title skill-subtitle';
    titleDiv.appendChild(titleText); // finished product

    // appending title div to the beginning of the skill holder
    skillHolder.appendChild(titleDiv);

    // attaches each skill to the skill holder
    for (var index = 0; index < skillArray.length; index++) {
        var newDiv = document.createElement('span');
        newDiv.className = 'skill-item';

        var newSkill = document.createTextNode(skillArray[index]);

        newDiv.appendChild(newSkill);
        skillHolder.appendChild(newDiv);
    }

    // var justAPeriod = document.createTextNode('.');
    var bottomItem = document.createElement('div');
    bottomItem.className = 'bottom-item';
    // bottomBitch.appendChild(justAPeriod);
    skillHolder.appendChild(bottomItem);

    // adds completed list to the column
    parentID.appendChild(skillHolder);
}