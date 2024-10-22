const React = require('react');
const { useState } = require('react');

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const rules = [
    { regex: /.{8,}/, message: 'At least 8 characters' },
    { regex: /[A-Z]/, message: 'At least one uppercase letter' },
    { regex: /[a-z]/, message: 'At least one lowercase letter' },
    { regex: /\d/, message: 'At least one digit' },
    { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'At least one special character' }
  ];

  const validatePassword = (password) => {
    const passedRules = [];

    rules.forEach(rule => {
      if (rule.regex.test(password)) {
        passedRules.push(rule.message);
      }
    });
    switch (passedRules.length) {
      case 0:
      case 1:
        return 'Very Weak';
      case 2:
        return 'Weak';
      case 3:
        return 'Medium';
      case 4:
        return 'Strong';
      case 5:
        return 'Very Strong';
      default:
        return 'Unknown';
    }
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(validatePassword(pwd));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <p>Password Strength: {strength}</p>
    </div>
  );
}

export default PasswordChecker;
