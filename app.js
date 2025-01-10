let quote = document.querySelector('#quote');

// Initialize an empty array for quotes
let nums = [
    "Be the change that you wish to see in the world. — Mahatma Gandhi",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
    "Life is what happens when you're busy making other plans. — John Lennon",
    "It always seems impossible until it's done. — Nelson Mandela",
    "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
    "The best way to predict the future is to create it. — Peter Drucker",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
    "Believe you can and you're halfway there. — Theodore Roosevelt",
    "I can accept failure, everyone fails at something. But I can't accept not trying. — Michael Jordan",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "The journey of a thousand miles begins with one step. — Lao Tzu"
];

// Initialize an empty array for colors
let colors = [
    "#FF5733", "#33FF57", "#5733FF", "#FF33A6", "#33A6FF",
    "#FFC300", "#C70039", "#900C3F", "#581845", "#28B463",
    "#1F618D", "#E67E22", "#2ECC71", "#F1C40F", "#E74C3C",
    "#8E44AD", "#3498DB", "#D35400", "#7D3C98", "#2C3E50"
];

// Initialize index to keep track of the current quote
let index = 0;
let body = document.querySelector('body');

// Function to display quotes and change background color
function displayQuote() {
    quote.innerText = nums[index];  // Set the current quote
    body.style.backgroundColor = colors[index];  // Change background color
    index = (index + 1) % nums.length;  // Move to the next quote in a circular manner
}

// Change quote and background color every 3 seconds
setInterval(displayQuote, 3000);
