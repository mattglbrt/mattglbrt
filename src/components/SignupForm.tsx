// src/components/SignupForm.tsx
import React from 'react';

function SignupForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const signupButton = document.getElementById("signupButton") as HTMLButtonElement | null;
    if (signupButton) {
      signupButton.textContent = "Thanks";
    }
    event.currentTarget.submit();
  };

  return (
    <form
      className="w-full max-w-sm mx-auto lg:mx-0 flex flex-col items-center lg:items-start justify-center p-4"
      name="signup"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      id="signupForm"
      onSubmit={handleSubmit}
    >
      {/* Required hidden field for Netlify Forms */}
      <input type="hidden" name="form-name" value="signup" />
      {/* Honeypot field for spam protection */}
      <input type="hidden" name="bot-field" />

      <div className="w-full flex items-center border-b border-accent py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          name="name"
          placeholder="Jane Doe"
          aria-label="Full name"
          required
        />
        <button
          id="signupButton"
          className="flex-shrink-0 bg-accent/30 hover:bg-accent/10 text-sm text-black py-1 px-2 rounded"
          type="submit"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
