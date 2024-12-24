# Mailly 📧

A lightweight, easy-to-use package for email OTP (One-Time Password) verification in JavaScript applications.

![Version](https://img.shields.io/badge/version-6.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)

## Features ✨

- Simple email OTP generation and sending
- OTP verification
- Resend OTP functionality
- Promise-based API
- Framework agnostic - works with any JavaScript project
- Lightweight with minimal dependencies

## Installation 🚀

```bash
npm install mailly
# or
yarn add mailly
# or
pnpm add mailly
```

## Usage Examples 💡

### Basic JavaScript/Node.js

```javascript
const { sendOtp, verifyOtp, resendOtp } = require('mailly');

// Send OTP
async function handleSendOTP() {
    try {
        const result = await sendOtp('user@example.com');
        console.log('OTP sent successfully:', result);
    } catch (error) {
        console.error('Failed to send OTP:', error);
    }
}

// Verify OTP
async function handleVerifyOTP() {
    try {
        const result = await verifyOtp('user@example.com', '123456');
        console.log('OTP verification result:', result);
    } catch (error) {
        console.error('Failed to verify OTP:', error);
    }
}

// Resend OTP
async function handleResendOTP() {
    try {
        const result = await resendOtp('user@example.com');
        console.log('OTP resent successfully:', result);
    } catch (error) {
        console.error('Failed to resend OTP:', error);
    }
}
```

### React Example

```jsx
import { useState } from 'react';
import { sendOtp, verifyOtp, resendOtp } from 'mailly';

function OTPVerification() {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [status, setStatus] = useState('');

    const handleSendOTP = async () => {
        try {
            setStatus('sending');
            await sendOtp(email);
            setStatus('sent');
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    const handleVerifyOTP = async () => {
        try {
            setStatus('verifying');
            const result = await verifyOtp(email, otp);
            setStatus('verified');
        } catch (error) {
            setStatus('error');
            console.error(error);
        }
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
            />
            <button onClick={handleSendOTP}>Send OTP</button>
            
            {status === 'sent' && (
                <>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                    />
                    <button onClick={handleVerifyOTP}>Verify OTP</button>
                    <button onClick={() => resendOtp(email)}>Resend OTP</button>
                </>
            )}
        </div>
    );
}
```

### Next.js API Route Example

```javascript
// pages/api/verify-otp.js
import { verifyOtp } from 'mailly';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, otp } = req.body;

    try {
        const result = await verifyOtp(email, otp);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
```

## API Reference 📚

### sendOtp(email)
Sends an OTP to the specified email address.

- **Parameters:**
  - `email` (string): The recipient's email address
- **Returns:** Promise resolving to the server response
- **Throws:** Error if the request fails

### verifyOtp(email, otp)
Verifies the OTP for the given email address.

- **Parameters:**
  - `email` (string): The email address
  - `otp` (string): The OTP to verify
- **Returns:** Promise resolving to the verification result
- **Throws:** Error if the verification fails

### resendOtp(email)
Resends the OTP to the specified email address.

- **Parameters:**
  - `email` (string): The recipient's email address
- **Returns:** Promise resolving to the server response
- **Throws:** Error if the request fails

## Error Handling 🚨

The package uses standard Promise-based error handling. All methods will throw an error if the request fails, which can be caught using try/catch blocks or .catch() method.

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

To build the package locally:

```bash
npm install
npm run build
```

## License 📄

ISC License

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.