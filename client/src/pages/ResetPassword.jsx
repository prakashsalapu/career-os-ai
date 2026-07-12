import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import { Loader, Lock } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await axios.put(`/api/auth/resetpassword/${token}`, { password });
      // If successful, we could log them in automatically since the backend returns a token,
      // but redirecting to login is standard
      localStorage.setItem('token', res.data.token); // Autologin optional
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Create new password</h2>
        <p className="text-slate-500 text-sm">Please enter your new password below.</p>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input 
            type="password" 
            placeholder="New Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            required
          />
          <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>
        
        <div className="relative">
          <input 
            type="password" 
            placeholder="Confirm New Password" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            required
          />
          <Lock size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3.5 bg-[#0B0F19] hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-slate-900/10 flex justify-center items-center"
        >
          {isSubmitting ? <Loader className="animate-spin" size={18} /> : 'Reset password'}
        </button>
      </form>

      <p className="text-center mt-8 text-sm text-slate-500">
        <Link to="/login" className="font-semibold text-slate-900 hover:underline">Back to Login</Link>
      </p>
    </AuthLayout>
  );
};

export default ResetPassword;
