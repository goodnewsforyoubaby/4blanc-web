import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { Button, Input, H2, Body, BodySmall, Caption } from '../../components/common';
import { useAuth } from '../../contexts/AuthContext';
import './AuthPage.css';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/account');
    }
  };

  const isValid = email.includes('@') && password.length >= 6;

  return (
    <div className="auth-page">
      <div className="auth-header">
        <H2>Welcome Back</H2>
        <BodySmall color="secondary">
          Sign in to your 4BLANC account
        </BodySmall>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {error && (
          <div className="auth-error">
            <BodySmall color="error">{error}</BodySmall>
          </div>
        )}

        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          icon={<Mail size={20} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock size={20} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        <button type="button" className="auth-forgot">
          Forgot password?
        </button>

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={!isValid}
        >
          Sign In
        </Button>
      </form>

      <div className="auth-hint">
        <Caption color="tertiary">
          Demo: Use any email and password (6+ chars) to sign in
        </Caption>
      </div>

      <div className="auth-divider">
        <span>or</span>
      </div>

      <Button
        variant="secondary"
        fullWidth
        onClick={() => navigate('/account/register')}
      >
        Create Account
      </Button>

      <button className="auth-guest" onClick={() => navigate(-1)}>
        Continue as Guest
      </button>
    </div>
  );
};
