# Mailly 📧

A lightweight, efficient email OTP (One-Time Password) verification service for JavaScript applications.

![Version](https://img.shields.io/badge/version-6.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

## Overview ✨

Mailly provides a simple and reliable API for handling email-based OTP verification in your applications. It handles the core functionality of sending, verifying, and resending OTPs, allowing you to implement your own UI and business logic around it.

## Core Features 🚀

- 📤 Send OTP emails
- ✅ Verify OTP codes
- 🔄 Resend OTP functionality
- ⚡ Promise-based API
- 🛠 Framework agnostic
- 🪶 Lightweight (~XX KB)

## Installation

```bash
npm install mailly
# or
yarn add mailly
# or
pnpm add mailly
```

## API Usage 💻

### Send OTP

```javascript
const { sendOtp } = require('mailly');

// Using async/await
try {
    const response = await sendOtp('user@example.com');
    console.log('OTP sent successfully');
} catch (error) {
    console.error('Failed to send OTP:', error);
}

// Using promises
sendOtp('user@example.com')
    .then(() => console.log('OTP sent successfully'))
    .catch(error => console.error('Failed to send OTP:', error));
```

### Verify OTP

```javascript
const { verifyOtp } = require('mailly');

try {
    const response = await verifyOtp('user@example.com', '123456');
    console.log('OTP verified successfully');
} catch (error) {
    console.error('Verification failed:', error);
}
```

### Resend OTP

```javascript
const { resendOtp } = require('mailly');

try {
    const response = await resendOtp('user@example.com');
    console.log('OTP resent successfully');
} catch (error) {
    console.error('Failed to resend OTP:', error);
}
```

## Integration Examples 🔧

### React Integration

```javascript
import { sendOtp, verifyOtp } from 'mailly';

function LoginComponent() {
    const handleVerification = async (email, otp) => {
        try {
            await verifyOtp(email, otp);
            // Handle successful verification
        } catch (error) {
            // Handle verification error
        }
    };
    
    // Implement your UI and use the functions as needed
}
```

### Express.js API Integration

```javascript
const express = require('express');
const { sendOtp, verifyOtp } = require('mailly');

const app = express();
app.use(express.json());

app.post('/api/send-otp', async (req, res) => {
    try {
        await sendOtp(req.body.email);
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/api/verify-otp', async (req, res) => {
    try {
        await verifyOtp(req.body.email, req.body.otp);
        res.json({ success: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
```

## API Reference 📚

### sendOtp(email)
Sends an OTP to the specified email address.

- **Parameters:**
  - `email` (string): The recipient's email address
- **Returns:** Promise<Object>
- **Throws:** Error if the request fails

### verifyOtp(email, otp)
Verifies the OTP for the given email address.

- **Parameters:**
  - `email` (string): The email address
  - `otp` (string): The OTP to verify
- **Returns:** Promise<Object>
- **Throws:** Error if verification fails

### resendOtp(email)
Resends the OTP to the specified email address.

- **Parameters:**
  - `email` (string): The recipient's email address
- **Returns:** Promise<Object>
- **Throws:** Error if the request fails

## Error Handling 🚨

```javascript
try {
    await sendOtp('user@example.com');
} catch (error) {
    if (error.response) {
        // Server responded with an error
        console.error('Server error:', error.response.data);
    } else if (error.request) {
        // Request was made but no response received
        console.error('Network error');
    } else {
        // Something else went wrong
        console.error('Error:', error.message);
    }
}
```

## Development 🛠️

```bash
# Install dependencies
npm install

# Build the package
npm run build
```

## License 📄

ISC License

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## Support 💪

If you encounter any issues or have questions, please file an issue on the GitHub repository.