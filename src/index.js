const axios = require('axios');


const BASE_URL = 'http://35.207.216.12:3000';

async function sendOtp(email) {
    try {
        const response = await axios.get(`${BASE_URL}/send?email=${email}`);
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error);
        throw error;
    }
}


async function verifyOtp(email, otp) {
    try {
        const response = await axios.post(`${BASE_URL}/verify?email=${email}&otp=${otp}`);
        return response.data;
    } catch (error) {
        console.error('Error verifying OTP:', error);
        throw error;
    }
}


async function resendOtp(email) {
    try {
        const response = await axios.get(`${BASE_URL}/resend?email=${email}`);
        return response.data;
    } catch (error) {
        console.error('Error resending OTP:', error);
        throw error;
    }
}


module.exports = {
    sendOtp,
    verifyOtp,
    resendOtp
};
