exports.handler = async function(event, context) {
  if (event.httpMethod === 'POST') {
    try {
      const { name, email, message } = JSON.parse(event.body);

      // For now, just log the data to the console (you can replace it with email sending logic)
      console.log(`Received contact form submission:`);
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);

      // Simulating success (In real-world, you might want to send an email)
      return {
        statusCode: 200,
        body: JSON.stringify({ status: 'success', message: 'Message sent successfully!' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ status: 'error', message: 'There was an error processing your request.' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ status: 'error', message: 'Method Not Allowed' }),
  };
};
