import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import { Mail, Loader, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [otpVerified, setOtpVerified] = useState(false);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setMessage('');

    try {
      await axios.post('/api/auth/forgotpassword', { email });
      setOtpSent(true);
      setMessage("OTP sent to your email.");
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to verify OTP');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleOtpChange = async (index, value) => {
  if (!/^[0-9]?$/.test(value)) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  // Auto focus next input
  if (value && index < 5) {
    document.getElementById(`otp-${index + 1}`)?.focus();
  }

  // Verify automatically after 6 digits
  if (newOtp.join("").length === 6) {
    try {
      await axios.post("/api/auth/verify-otp", {
        email,
        otp: newOtp.join("")
      });

      setOtpVerified(true);
      setMessage("OTP Verified Successfully");
      setError("");

      navigate('/reset-password', {
        state: {
          email,
          otp: newOtp.join("")
         }
      });

    } catch (err) {
      setError("Invalid OTP");
      setOtp(['', '', '', '', '', '']);
      document.getElementById("otp-0")?.focus();
    }
  }
};

  return (
    <AuthLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Reset your password</h2>
        <p className="text-slate-500 text-sm">Enter your email and we'll send you a secure password reset link.</p>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
      {message && (
        <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 rounded-lg text-sm flex items-center gap-2">
          <CheckCircle size={16} />
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input 
            type="email" 
            placeholder="Enter Your Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            required
          />
          <Mail size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500" />
        </div>

        {/* otp */}
        {otpSent && !otpVerified && (
          <div className="mt-6">
            <p className="text-center text-sm mb-4">
              Enter the 6-digit OTP sent to your email
            </p>

            <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                id={`otp-${index}`}
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                className="w-12 h-12 text-center border rounded-lg text-xl font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>
        </div>
      )}
      <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3.5 bg-[#0B0F19] hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-slate-900/10 flex justify-center items-center"
        >
          {isSubmitting ? <Loader className="animate-spin" size={18} /> : otpSent ? 'Resend OTP' : 'Send OTP'}
        </button>

      </form>

      <p className="text-center mt-8 text-sm text-slate-500">
        Remembered your password? <Link to="/login" className="font-semibold text-slate-900 hover:underline">Sign in</Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
