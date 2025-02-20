import { useState, useEffect, ChangeEvent, FormEvent } from "react";

const EmailVerification = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(23);

  // Handle OTP input change
  const handleChange = (index: number, value: string): void => {
    if (isNaN(Number(value))) return; // Only allow numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Focus next input if value is entered
    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 6) {
      setError("Please enter all 6 digits.");
      return;
    }

    const correctOtp = "123456"; // Replace with backend OTP logic
    if (enteredOtp === correctOtp) {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  // Timer logic for OTP resend
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-auto text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-2 font-Raleway">
          Verify Your Code
        </h2>
        <p className="text-gray-500 mb-4 font-Opensans">Enter your passcode below</p>
        {success ? (
          <p className="text-green-500 font-Opensans">OTP Verified Successfully!</p>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center gap-2 mb-4">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(index, e.target.value)
                    }
                    className="w-12 h-12 text-center text-xl border bg-red-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500"
                  />
                ))}
              </div>

              {error && <p className="text-red-500 mb-2">{error}</p>}

              <button
                type="submit"
                className="w-full bg-[#FE221E] text-white py-2 rounded-lg hover:bg-red-400 transition font-Opensans"
              >
                Verify
              </button>
            </form>

            <p className="text-gray-500 mt-4 font-Opensans">
              Didn’t receive the code?{" "}
              <span
                className={`text-blue-800 font-medium text-sm cursor-pointer font-Opensans ${
                  timer > 0 ? "cursor-not-allowed" : ""
                }`}
                onClick={() => timer === 0 && setTimer(23)}
              >
                {timer > 0 ? `Resend OTP code in ${timer}s` : "Resend OTP code"}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
