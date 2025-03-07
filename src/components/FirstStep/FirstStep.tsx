import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Tooltip } from 'antd';

const getPasswordStrength = (password: string): number => {
  if (!password) return 0;
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;
  return strength;
};

interface FirstStepProps {
  onNext: (e: React.FormEvent) => Promise<void>;
}

const FirstStep: React.FC<FirstStepProps> = ({ onNext }) => {
  const [form] = Form.useForm();
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const strength = getPasswordStrength(password);
  const passwordsMatch = password === confirmPassword;
  return (
    <Form
      form={form}
      initialValues={{ password: '', confirmPassword: '' }}
      className="login-form register-confirmation-form"
    >
      <div className="invite-sub-header">
        Create a password which is hard to guess.
      </div>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Password is required' }]}
      >
        <Input.Password
          placeholder="Enter password"
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>

      <Tooltip title={`Password strength: ${strength}/4`}>
        <div>Password strength: {strength}/4</div>
      </Tooltip>

      <Form.Item
        name="confirmPassword"
        rules={[
          { required: true, message: 'Please confirm your password' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error('The two passwords do not match!')
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm password"
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </Form.Item>

      <div className="register-confirmation-form-buttons">
        {window.innerWidth >= 1024 && <Link to="/login">Log In</Link>}
        <Button
          disabled={strength < 3 || !passwordsMatch}
          onClick={onNext}
          className="call-to-action-button"
        >
          Next
        </Button>
      </div>
    </Form>
  );
};

export default FirstStep;
