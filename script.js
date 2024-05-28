// Different arrays of conversation starters for each tab
const conversationStarters = {
    type1: [
        "What's the most exciting thing you learned at school this week?",
        "Tell me about a memorable moment you had in class today.",
        "What's your favorite subject this year, and why do you enjoy it?",
        "Can you share a recent challenge you faced at school and how you overcame it?",
        "What's one thing you did today that made you feel proud?",
        "Is there a new friend you made at school recently? What do you like most about them?",
        "Have you encountered anything confusing or unusual at school that you'd like to talk about?",
        "What project or hobby would you like us to explore together this weekend?",
        "What's the coolest thing you've learned in school this month?",
        "Can you tell me about a time you felt really accomplished at school?",
        "What's a new skill or activity you're interested in learning?",
        "Tell me about a recent achievement or milestone you reached.",
        "What's a moment that made you really happy or excited today?",
        "Have you been involved in any school events or clubs this week? How was it?",
        "What are you most looking forward to in the coming week?",
        "Do you enjoy any subjects at school more than others? Why?",
        "Can you share a funny or interesting story from your time at school?",
        "What's something new you discovered or learned recently that surprised you?",
        "How do you usually spend your breaks between classes?",
        "Are there any upcoming events or field trips at school that you're excited about?",
        "What's your strategy for studying for exams or quizzes?",
        "Do you prefer group projects or individual assignments? Why?",
        "What's the most challenging assignment you've had to complete recently?",
        "What games do you love playing during recess that you can teach me?",
        "How do you feel about the amount of homework you receive?",
        "Have you ever had to give a presentation in front of your class? How did it go?",
        "What's your opinion on the school's rules and policies?",
        "What's the best piece of advice a teacher has given you?",
        "Are there any changes you'd like to see in the school canteen menu?",
        "What's your favorite spot in the school where you like to hang out during breaks?",
        "Have you encountered any difficult situations at school? How did you handle them?",
        "Do you feel that your school provides enough support for students' mental health and well-being?",
        "What's one thing you wish your teachers knew about you?",
        "Have you ever had to deal with bullying or conflicts at school? How did you handle it?",
        "What's your favorite memory from your time at school so far?",
        "What's one thing you wish you could change about your school?",
        "How do you handle stress during exam periods or busy school weeks?",
        "Do you participate in any sports teams or competitions at school?",
        "What's the most interesting book you've read for school so far?",
        "Are there any school traditions or events that you look forward to each year?",
        "What's the most unusual thing you've learned in school recently?",
        "Do you have any goals you want to achieve academically this year?",
        "What's your favorite thing about going to school each day?",
        "How do you feel about the amount of group work you have to do in school?",
        "Have you ever been surprised by a grade you received on an assignment? How did you react?",
        "Is there something you'd like to do for others in your school?",
        "What's one thing you hope to achieve or experience before graduating from school?",
        "What's the most creative project you've worked on for school?",
        "What's your favorite thing to do during recess or lunch breaks?",
        "What's your opinion on the importance of extracurricular activities at school?",
        "What did you do during recess today? Did you try any new games or activities?",
        // More starters...
    ],
    type2: [
        "What's your favorite memory from our last family outing?",
        "Is there a particular place you'd love to visit for our next holiday? Why?",
        "What's one thing you'd like to do differently on our next family trip?",
        "Can you share a funny moment that happened during one of our outings?",
        "Is there a specific destination you've been dreaming of visiting someday?",
        "What's your favorite thing about going on holiday with our family?",
        "Do you prefer beach vacations, city explorations, or nature retreats? Why?",
        "What's the most exciting excursion you've been on with your friends or school?",
        "If you could plan a day trip anywhere, where would you choose to go?",
        "What's your favorite part about traveling to new places?",
        "Is there a holiday tradition you'd like to start with our family?",
        "What's the craziest adventure you can imagine us going on together?",
        "If you could go back to any place we've visited before, where would you pick?",
        "Do you enjoy exploring new cultures and cuisines when we travel?",
        "What's one thing you've always wanted to try doing on our family outings?",
        "What's your favorite souvenir or memento from our past trips?",
        "If you could design the perfect family holiday, what would it look like?",
        "Do you prefer planning our outings or being surprised by them?",
        "What's the most beautiful sight you've seen on our travels?",
        "Is there a specific activity you'd like to try during our next day trip?",
        "What's one thing you've learned from our outings that you'll never forget?",
        "Do you enjoy capturing moments with photos or videos during our outings?",
        "What's the silliest thing that's happened to us while on holiday?",
        "If you could bring anyone with us on our next outing, who would it be?",
        "What's the best part about exploring new places as a family?",
        "Do you have a favorite holiday destination from your childhood?",
        "What's the most adventurous activity you've ever done while on holiday?",
        "What's your favorite thing to do during long car rides on our outings?",
        "If you could plan a surprise outing for us, what would you choose?",
        "What's one thing you've always wanted to see or do while on holiday?",
        "Do you prefer staying in hotels, vacation rentals, or camping during our trips?",
        "What's the tastiest food you've tried while on holiday?",
        "Is there a place you'd love to revisit because of the people you met there?",
        "What's the most interesting fact you've learned about a destination we've visited?",
        "Do you like exploring famous landmarks or hidden gems when we travel?",
        "What's the most breathtaking view you've seen during our outings?",
        "If you could create a new holiday destination, what would it be like?",
        "What's your favorite thing to do during downtime on our outings?",
        "Do you enjoy planning our holiday itineraries or going with the flow?",
        "What's one thing you'd like to do differently on our future day trips?",
        "Is there a holiday destination you've seen in movies that you'd love to visit?",
        "What's the most unexpected adventure we've had on our outings?",
        "If you could spend a whole day doing one activity during our outings, what would it be?",
        "What's the funniest thing that's ever happened to us while traveling?",
        "Do you prefer exploring cities, countryside, or coastal areas during our outings?",
        "What's your favorite part about coming home after our holidays?",
        "What's the most valuable lesson you've learned from our family outings?",
        "If you could choose any mode of transportation for our next holiday, what would it be?",
        "What's the most memorable animal encounter you've had during our outings?",
        "What's one thing you'd like to add to our family outings bucket list?",
        // More starters...
    ],
    type3: [
        "What's something you've been thinking about a lot lately that you haven't shared with anyone?",
        "Can you tell me about a time when you felt really proud of yourself?",
        "Is there something you're afraid of that you want to talk about?",
        "Have you ever felt left out or lonely? How did you handle it?",
        "What's one thing you wish you could change about yourself? Why?",
        "Can you share a time when you felt really loved and supported?",
        "Do you ever worry about the future? What scares you the most?",
        "Is there something you're struggling with that you need help or advice on?",
        "What's one thing you've always wanted to ask me but haven't?",
        "Have you ever felt like you didn't fit in? How did it make you feel?",
        "Do you ever feel pressure to be perfect? Where do you think that pressure comes from?",
        "What's something you've been keeping to yourself that you want to share with me?",
        "Can you tell me about a time when you felt really happy and content?",
        "Is there something you're curious about but haven't had the chance to explore?",
        "What's one thing you wish other people understood about you?",
        "Do you ever feel like you're not good enough? Why do you think that is?",
        "Can you share a time when you felt really hurt or disappointed?",
        "What's one thing you're passionate about that you haven't told anyone?",
        "Have you ever felt like you weren't taken seriously? How did it make you feel?",
        "Do you ever compare yourself to others? How does it affect you?",
        "What's one thing you're really grateful for in your life?",
        "Can you tell me about a time when you felt really scared or anxious?",
        "What's one thing you're really proud of accomplishing recently?",
        "Is there something you regret that you want to talk about?",
        "Have you ever felt like you didn't belong? Why or why not?",
        "What's one thing you wish you could change about the world?",
        "Do you ever feel pressure to hide your true feelings? Why?",
        "Can you share a time when you felt really misunderstood?",
        "What's one thing you're looking forward to in the future?",
        "Have you ever felt overwhelmed by your emotions? How did you cope?",
        "Do you ever feel like you have to pretend to be someone you're not? Why?",
        "What's one thing you're really passionate about that you want to pursue?",
        "Can you tell me about a time when you felt really inspired?",
        "What's one thing you wish you could tell your younger self?",
        "Have you ever felt like you were judged unfairly? How did it make you feel?",
        "Do you ever feel pressure to live up to other people's expectations? Why?",
        "What's one thing you wish you could change about our relationship?",
        "Can you share a time when you felt really supported by someone?",
        "What's one thing you want to accomplish in the next year?",
        "Have you ever felt like you didn't have anyone to talk to? Why?",
        "Do you ever feel like you're not good enough as a person? Why?",
        "What's one thing you wish you could do but haven't had the chance to?",
        "Can you tell me about a time when you felt really loved by someone?",
        "What's one thing you're really proud of about yourself?",
        "Have you ever felt like you were treated unfairly? How did you handle it?",
        "Do you ever feel pressure to hide your true self? Why?",
        "What's one thing you want me to know about you that you've never told me before?",
        "Can you share a time when you felt really grateful for something?",
        "What's one thing you're afraid of losing in your life?",
        // More starters...
    ],
    type4: [
        "What's a big dream you have that we can work on together?",
        "Can you tell me about a goal you're excited to achieve this year?",
        "What's something you're really passionate about that you want to share with me?",
        "Is there a challenge you're facing that I can help you with?",
        "What's a skill you'd love to learn that we can practice together?",
        "Can you share a time when you felt really proud of yourself? What happened?",
        "What's a hobby or interest you've always wanted to try but haven't yet?",
        "What's the most important lesson you've learned recently?",
        "What's one thing you want to do before the end of this year?",
        "Is there a fear you have that you'd like to overcome? How can I support you?",
        "What's a failure you've experienced that taught you something valuable?",
        "What's something you've been curious about that we can explore together?",
        "Can you tell me about a role model or hero you admire? Why do you look up to them?",
        "What's a personal goal you've set for yourself? How can I help you achieve it?",
        "What's something you're grateful for today?",
        "Can you share a moment when you felt really inspired? What did you do next?",
        "What's one way you've grown or changed in the past year?",
        "What's a new habit you'd like to start? How can we make it happen together?",
        "Do you have a favorite quote or saying that motivates you?",
        "What's a project or activity you're excited about? How can I join in?",
        "Can you tell me about a time when you stepped out of your comfort zone?",
        "What's one thing you want to improve about yourself?",
        "What's a dream job or career you've thought about pursuing?",
        "Can you share a time when you felt really supported by someone? How did it help you?",
        "What's one thing you wish you could tell your younger self?",
        "What's a fun activity we can do together to help you relax and unwind?",
        "What's a book or movie that has inspired you? Why?",
        "What's something you want to accomplish in the next month?",
        "Is there a special place you'd like to visit? What makes it special to you?",
        "What's a personal challenge you've overcome recently?",
        "What's one thing you want to be known for?",
        "What's a value or principle that's really important to you?",
        "Can you share a time when you learned something new and exciting?",
        "What's one thing you want to change or improve in our family life?",
        "What's a fun way we can celebrate your next achievement?",
        "What's something you've always wanted to learn about me?",
        "What's a goal we can set together and work towards as a team?",
        "What's a lesson you've learned from a mistake? How did it help you grow?",
        "What's one thing you're really excited about in your future?",
        "Can you tell me about a friend who inspires you? Why?",
        "What's a project or craft you've always wanted to try?",
        "What's one way we can make our weekends more fun and productive?",
        "What's a hidden talent or skill you have that you'd like to develop?",
        "What's a time when you felt really happy and fulfilled? What were you doing?",
        "What's one thing you want to achieve before your next birthday?",
        "Can you share a goal you're working on that we can celebrate together?",
        "What's a way we can make our daily routine more enjoyable?",
        "What's one thing you're really proud of that you haven't shared with me yet?",
        "What's a future adventure or trip you'd love to plan together?"
        // More starters...
    ],
    type5: [
        "What's something you're really passionate about that you love to talk about?",
        "Can you tell me about a hobby or activity you enjoy doing in your free time?",
        "Is there a new interest or hobby you've picked up recently?",
        "What's a project or activity you've always wanted to try but haven't yet?",
        "What's your favorite way to spend your weekends or free time?",
        "Do you have a favorite book, movie, or TV show? What do you love about it?",
        "What's a topic you could talk about for hours without getting bored?",
        "Is there a skill you'd like to learn or get better at?",
        "What's the coolest thing you've ever created or built?",
        "Do you have a favorite sport or physical activity? What do you enjoy about it?",
        "Is there an art form, like drawing, painting, or music, that you're passionate about?",
        "What's something you've always wanted to learn but haven't had the chance to?",
        "What's a collection or hobby you're really proud of?",
        "Do you enjoy cooking or baking? What's your favorite thing to make?",
        "What's a game or activity that you love playing with friends or family?",
        "Is there a musical instrument you'd like to learn how to play?",
        "What's your favorite subject in school and why?",
        "Do you have any favorite outdoor activities or adventures?",
        "What's a creative project you're working on or would like to start?",
        "Is there a particular type of music or band that you love listening to?",
        "What's a place you've always wanted to visit and why?",
        "Do you have a favorite type of puzzle or brainteaser that you enjoy solving?",
        "What's something you enjoy researching or learning more about?",
        "Is there a favorite podcast, YouTube channel, or online series that you follow?",
        "Do you enjoy any kind of crafting or DIY projects?",
        "What's a goal or dream you have related to one of your interests?",
        "Is there a sport or game you wish you could play more often?",
        "Do you have a favorite animal or pet? What do you love about them?",
        "What's something you'd like to create if you had all the materials and time you needed?",
        "Do you enjoy gardening or working with plants? What's your favorite plant?",
        "What's a science or technology topic that fascinates you?",
        "Is there a theater or performing arts activity you'd like to try?",
        "Do you enjoy writing stories, poems, or journaling? What's your favorite thing to write about?",
        "What's a type of dance or movement you enjoy or would like to learn?",
        "Is there a particular career or job that interests you?",
        "What's a club or group you'd like to join or are already part of?",
        "Do you enjoy taking photos or making videos? What's your favorite subject to capture?",
        "Is there a historical period or event that you find intriguing?",
        "What's a board game or card game you love playing?",
        "Do you have a favorite superhero or fictional character? What do you like about them?",
        "What's something you'd like to design or invent one day?",
        "Is there a favorite type of food or cuisine that you love eating or cooking?",
        "What's a charity or cause you're passionate about supporting?",
        "Do you enjoy any form of martial arts or self-defense training?",
        "What's a festival or cultural event you love attending?",
        "Do you have a favorite fashion style or trend?",
        "What's a language you'd like to learn and why?",
        "Is there a favorite piece of technology or gadget you love using?",
        "What's a skill or talent you admire in others and would like to develop?",
        "Do you have a favorite place to relax and unwind? What makes it special?"
        // More starters...
    ]
};
let currentType = "type1";
let currentStarter = "";
const starterHistory = [];

function showTabContent(event, type) {
    currentType = type;
    currentStarter = "";
    starterHistory.length = 0; // Clear history when switching tabs

    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });
    event.currentTarget.classList.add("active");

    generateStarter(event);
}

function generateStarter(event) {
    event.stopPropagation();

    const starters = conversationStarters[currentType];
    let newStarterIndex;
    do {
        newStarterIndex = Math.floor(Math.random() * starters.length);
    } while (starters[newStarterIndex] === currentStarter);

    currentStarter = starters[newStarterIndex];
    starterHistory.push(currentStarter);

    if (starterHistory.length > 5) {
        starterHistory.shift();
    }

    document.getElementById('conversationStarter').innerText = currentStarter;
    document.getElementById('initialContainer').style.display = 'none';
    document.getElementById('output').classList.remove('hidden');
    document.getElementById('additionalText').style.display = 'block';
    document.getElementById('buttonContainer').style.display = 'flex';
}

document.addEventListener('DOMContentLoaded', function() {
    const outputContainer = document.getElementById('output');
    outputContainer.addEventListener('click', function(event) {
        generateStarter(event);
    });
});

function generateStarter(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to higher-level elements

    const starters = conversationStarters[currentType]; // Uses the currentType to fetch relevant starters
    let newStarterIndex;
    do {
        newStarterIndex = Math.floor(Math.random() * starters.length);
    } while (starters[newStarterIndex] === currentStarter);

    currentStarter = starters[newStarterIndex];
    starterHistory.push(currentStarter);

    if (starterHistory.length > 5) {
        starterHistory.shift(); // Keeps the history array from growing indefinitely
    }

    document.getElementById('conversationStarter').innerText = currentStarter;
    document.getElementById('initialContainer').style.display = 'none';
    document.getElementById('output').classList.remove('hidden');
    document.getElementById('additionalText').style.display = 'block';
    document.getElementById('buttonContainer').style.display = 'flex';
}

// Ensure previous functions like showTabContent update currentType correctly
function showTabContent(event, type) {
    currentType = type;
    currentStarter = "";
    starterHistory.length = 0;

    let tabButtons = document.querySelectorAll(".tab-button");
    tabButtons.forEach(button => {
        button.classList.remove("active");
    });
    event.currentTarget.classList.add("active");

    generateStarter(event);
}

// Function to generate a new starter
function generateStarter(event) {
    // Prevent generating a new starter if the modal is visible
    if (!document.getElementById('notificationModal').classList.contains('hidden')) {
        return;
    }

    event.stopPropagation();

    const starters = conversationStarters[currentType];
    let newStarterIndex;
    do {
        newStarterIndex = Math.floor(Math.random() * starters.length);
    } while (starters[newStarterIndex] === currentStarter);

    currentStarter = starters[newStarterIndex];
    starterHistory.push(currentStarter);

    if (starterHistory.length > 5) {
        starterHistory.shift();
    }

    document.getElementById('conversationStarter').innerText = currentStarter;
    document.getElementById('initialContainer').style.display = 'none';
    document.getElementById('output').classList.remove('hidden');
    document.getElementById('additionalText').style.display = 'block';
    document.getElementById('buttonContainer').style.display = 'flex';
}

// Function to close the notification modal
function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    notificationModal.style.display = 'none';
}

// Event listener for generating a new starter
document.addEventListener('DOMContentLoaded', function() {
    const outputContainer = document.getElementById('output');
    outputContainer.addEventListener('click', function(event) {
        generateStarter(event);
    });
});

// Event listener for closing the modal when clicking outside of it
document.getElementById('notificationModal').addEventListener('click', function(event) {
    if (event.target === document.getElementById('notificationModal')) {
        closeNotification();
    }
});

// Function to show the modal
function showMoveOn(message) {
    const notificationModal = document.getElementById('notificationModal');
    const notificationMessage = document.getElementById('notificationMessage');

    notificationMessage.textContent = message;
    notificationModal.classList.remove('hidden');
    notificationModal.style.display = 'flex';
}


function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    notificationModal.style.display = 'none';
}

function showPreviousStarter(event) {
    event.stopPropagation();

    if (starterHistory.length > 1) {
        starterHistory.pop();
        currentStarter = starterHistory[starterHistory.length - 1];
        document.getElementById('conversationStarter').innerText = currentStarter;
    } else {
        showMoveOn("You gotta keep moving forward in order to keep the conversation going.");
    }
}

function copyToClipboard(event) {
    event.stopPropagation(); // Prevents the event from bubbling up

    const textToCopy = document.getElementById('conversationStarter').innerText;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showNotification("Text Copied!");
    }).catch(err => {
        showNotification("Failed to copy text");
        console.error("Failed to copy text: ", err);
    });
}

function showNotification(message) {
    const notificationCard = document.getElementById('notificationCard');
    notificationCard.textContent = message;
    notificationCard.classList.remove('hidden');
    notificationCard.classList.add('show');

    // Position the notification card at the top right corner
    notificationCard.style.top = '10px';
    notificationCard.style.right = '10px';
    notificationCard.style.left = 'auto';

    setTimeout(() => {
        notificationCard.classList.remove('show');
        notificationCard.classList.add('hidden');
    }, 1000);
}

function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    notificationModal.style.display = 'none';
}

function closeModalOnClickOutside(event) {
    const notificationModal = document.getElementById('notificationModal');
    if (event.target === notificationModal) {
        closeNotification();
    }
}

document.getElementById('notificationModal').addEventListener('click', closeModalOnClickOutside);
document.getElementById('closeModalButton').addEventListener('click', closeNotification);

document.addEventListener('DOMContentLoaded', function() {
    const outputContainer = document.getElementById('output');
    outputContainer.addEventListener('click', function(event) {
        generateStarter(event);
    });
});


function showMoveOn(message) {
    const notificationModal = document.getElementById('notificationModal');
    const notificationMessage = document.getElementById('notificationMessage');

    notificationMessage.textContent = message;
    notificationModal.classList.remove('hidden');
    notificationModal.style.display = 'flex';
}

function closeNotification() {
    const notificationModal = document.getElementById('notificationModal');
    notificationModal.classList.add('hidden');
    notificationModal.style.display = 'none';
}

function closeModalOnClickOutside(event) {
    if (event.target === document.getElementById('notificationModal')) {
        closeNotification();
    }
}

document.getElementById('notificationModal').addEventListener('click', closeModalOnClickOutside);
document.getElementById('closeModalButton').addEventListener('click', closeNotification);

document.body.addEventListener('click', function(event) {
    if (!event.target.closest('button')) {
        generateStarter(event);
    }
});

document.getElementById('shareButton').addEventListener('click', function() {
    const conversationStarterText = document.getElementById('conversationStarter').innerText;
    const draftContent = `"${conversationStarterText}"\n\nEvery conversation matters. Get your conversation starters at ready-daddy.com`;
    const draftContentElement = document.getElementById('draftContent');
    
    draftContentElement.innerText = draftContent;
    draftContentElement.style.fontSize = '20px'; // Set the desired font size here
    openModal('shareModal');
});


document.getElementById('closeModalButton').addEventListener('click', function() {
    closeModal('shareModal');
});

document.getElementById('dismissModalButton').addEventListener('click', function() { // Added event listener for dismiss button
    closeModal('shareModal');
});

document.getElementById('shareModal').addEventListener('click', function(event) {
    const modalContent = document.querySelector('#shareModal .modal-content');
    if (!modalContent.contains(event.target)) {
        closeModal('shareModal');
    }
});

document.getElementById('shareFacebook').addEventListener('click', function() {
    shareOnSocialMedia('facebook');
});

document.getElementById('shareTwitter').addEventListener('click', function() {
    shareOnSocialMedia('twitter');
});

document.getElementById('shareWhatsApp').addEventListener('click', function() {
    shareOnSocialMedia('whatsapp');
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';  // Prevent scrolling when modal is open
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';  // Restore scrolling when modal is closed
}

function shareOnSocialMedia(platform) {
    const draftContent = document.getElementById('draftContent').innerText;
    let shareUrl = '';

    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(draftContent)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(draftContent)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(draftContent)}`;
            break;
    }

    window.open(shareUrl, '_blank');
}
//*Carousel*//

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    
    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Initialize the carousel
    showSlide(currentIndex);
});
