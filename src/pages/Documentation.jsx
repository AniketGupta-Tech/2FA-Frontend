import React from "react";
// import { Copy } from "@lucide/react";


export default function Documentation() {
    const codeSnippet = `
import { TwoFactorAuth } from 'your-2fa-library';

TwoFactorAuth.init({
  userId: 'USER_ID',
  method: 'sms', // or 'email'
  callbackUrl: 'https://yourapp.com/verify'
});
  `;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(codeSnippet);
    };

    return (
        <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
            <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold" }}>Two-Factor Authentication Library</h1>
            <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: "1.5rem" }}>Easily integrate 2FA into your application with just a few lines of code.</p>

            <div style={{ padding: "1.5rem", marginBottom: "1.5rem", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Getting Started</h2>
                <p>Install the library using npm or yarn:</p>
                <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "4px" }}>
                    <code>npm install your-2fa-library</code>
                </pre>
                <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "4px", marginTop: "1rem" }}>
                    <code>yarn add your-2fa-library</code>
                </pre>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Library Setup</h3>
                <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "4px", position: "relative" }}>
                    <code>{codeSnippet}</code>
                    <button 
                        style={{ position: "absolute", top: "10px", right: "10px", padding: "5px 10px", border: "none", cursor: "pointer", backgroundColor: "#ddd" }}
                        onClick={copyToClipboard}
                    >
                        <Copy size={16} /> Copy
                    </button>
                </pre>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>How to Use</h3>
                <p>Pass the required parameters and integrate the verification process in your app seamlessly.</p>
                <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", borderRadius: "4px" }}>
                    <code>
                        {`const verify = async (code) => {
  const result = await TwoFactorAuth.verify(code);
  if (result.success) {
    console.log('2FA verified successfully!');
  } else {
    console.log('Verification failed. Please try again.');
  }
}`}
                    </code>
                </pre>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Required Parameters</h3>
                <ul style={{ paddingLeft: "1.5rem" }}>
                    <li><strong>userId:</strong> Unique identifier for the user.</li>
                    <li><strong>method:</strong> 'sms' or 'email' for the verification method.</li>
                    <li><strong>callbackUrl:</strong> URL to redirect after verification.</li>
                </ul>
            </div>

            <div style={{ textAlign: "center" }}>
                <button 
                    style={{ padding: "10px 20px", fontSize: "1.2rem", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}
                    onClick={() => window.open('https://github.com/your-repo/2fa-library', '_blank')}
                >
                    View on GitHub
                </button>
            </div>
        </div>
    );
}
