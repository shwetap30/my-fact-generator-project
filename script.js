document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "You have a passion for exploring the great outdoors.",
        "You are a nature enthusiast who loves diverse landscapes.",
        "You lead an active lifestyle with a love for trekking."
    ];
    
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFact').textContent = facts[randomIndex];
});
