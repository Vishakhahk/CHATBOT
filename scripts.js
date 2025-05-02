function sendMessage() {
    const input = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const userText = input.value.trim().toLowerCase();
  
    if (userText === "") return;
  
    // Show user's message
    chatbox.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;
  
    // Show "typing..." message
    const typingMsg = document.createElement("p");
    typingMsg.id = "typing";
    typingMsg.innerHTML = `<strong>Bot:</strong> <em>Typing...</em>`;
    chatbox.appendChild(typingMsg);
    chatbox.scrollTop = chatbox.scrollHeight;
  
    // Simulate delay before bot responds
    setTimeout(() => {
      let response = "Hmm, I didn't catch that. Try asking something else!";
  
      if (userText.includes("hello") || userText.includes("hi") || userText.includes("hey")) {
        response = "Hey there! 👋 What can I do for you?";
      } else if (userText.includes("how are you")) {
        response = "I'm doing great! Thanks for asking 😄";
      } else if (userText.includes("your name") || userText.includes("what is your name") || userText.includes("who are you")) {
        response = "My name is ViSha AI.😄";
      } else if (userText.includes("who created you") || userText.includes("owner") || userText.includes("invented")) {
        response = "Vishakha Kumbhar has Created me. I'm her first offline chatbot!😄";
      } else if (userText.includes("time")) {
        const now = new Date();
        response = `It's currently ${now.toLocaleTimeString()}.`;
      } else if (userText.includes("date")) {
        const today = new Date();
        response = `Today is ${today.toDateString()}.`;
      } else if (userText.includes("help me") || userText.includes("help")) {
        response = "just ask simple questions💡";
      } else if (userText.includes("bye") || userText.includes("goodbye") || userText.includes("see you")) {
        response = "Bye! Have a great day 👋";
      } else if (userText.includes("joke")) {
        response = "Why don’t programmers like nature? It has too many bugs! 🐛";
      }
  
      // Remove typing message
      document.getElementById("typing").remove();
  
      // Add bot's actual response
      chatbox.innerHTML += `<p><strong>Bot:</strong> ${response}</p>`;
      chatbox.scrollTop = chatbox.scrollHeight;
    }, 1000);
  
    // Clear input
    input.value = "";
  }
  
  // Toggle theme function
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }
  

  // Dark Mode Toggle Logic
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", toggle.checked);
});
