import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, H2, BodySmall, Caption } from '../../components/common';
import { useAuth } from '../../contexts/AuthContext';
import './AuthPage.css';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, error, isLoading } = useAuth();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }
    const success = await register({ firstName, lastName, email, password });
    if (success) {
      navigate('/account');
    }
  };

  const isValid =
    firstName.length > 0 &&
    lastName.length > 0 &&
    email.includes('@') &&
    password.length >= 6 &&
    password === confirmPassword &&
    acceptTerms;

  return (
    <div className="auth-page">
      <div className="auth-header">
        <H2>Create Account</H2>
        <BodySmall color="secondary">
          Join 4BLANC for exclusive offers
        </BodySmall>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        {error && (
          <div className="auth-error">
            <BodySmall color="error">{error}</BodySmall>
          </div>
        )}

        <div className="auth-row">
          <Input
            label="First Name"
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
          />
          <Input
            label="Last Name"
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
          />
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="At least 6 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={
            confirmPassword && password !== confirmPassword
              ? 'Passwords do not match'
              : undefined
          }
          autoComplete="new-password"
        />

        <label className="auth-checkbox">
          <input
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <Caption>
            I agree to the Terms of Service and Privacy Policy
          </Caption>
        </label>

        <Button
          type="submit"
          fullWidth
          loading={isLoading}
          disabled={!isValid}
        >
          Create Account
        </Button>
      </form>

      <div className="auth-divider">
        <span>or</span>
      </div>

      <Button
        variant="secondary"
        fullWidth
        onClick={() => navigate('/account/login')}
      >
        Sign In Instead
      </Button>
    </div>
  );
};
