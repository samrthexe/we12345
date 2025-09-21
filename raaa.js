document.getElementById('contact-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const responseDiv = document.getElementById('response');

  // Send form data to the backend function
  const response = await fetch('/.netlify/functions/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (data.status === 'success') {
    responseDiv.innerHTML = '<p>Thank you for your message! We will get back to you soon.</p>';
  } else {
    responseDiv.innerHTML = '<p>There was an error sending your message. Please try again.</p>';
  }
});
