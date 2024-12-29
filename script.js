//your JS code here. If required.
const timer = document.querySelector('#timer');

const updateTime = function(){
	const now = new Date();

	const date = now.getDate();
	const month = now.getMonth()+1;
	const year = now.getFullYear();
	let hour = now.getHours();
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
    // Convert hour to 12-hour format
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 becomes 12 for 12-hour format

	const text = `${date}/${month}/${year}, ${hour}:${min}:${sec} ${ampm}`;

	timer.textContent = text;
}


setInterval(updateTime,1000);

updateTime()