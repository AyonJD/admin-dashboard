import React, { useState } from 'react';
import OtpInput from "otp-input-react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// Icon Import
import { ImCross } from 'react-icons/im';
import { BsFillShieldLockFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { toast } from 'react-hot-toast';
import { loadStorage } from '../../utils/localStorage';

const OtpVerifyPopup = ({ setOpenPopup }) => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const user = loadStorage('payment_user');

    // Captcha verifier
    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignIn();
                    },
                    "expired-callback": () => { },
                },
                auth
            );
        }
    }

    // SignIn Handler
    const onSignIn = async (data) => {
        
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPhone = "+" + phone;

        if (!phone) {
            toast.error("Please enter your phone number!");
            setLoading(false);
            return;
        }

        signInWithPhoneNumber(auth, formatPhone, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    // OTP verifier
    const onOTPVerify = () => {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                setLoading(false);
                toast.success("OTP verified successfully!")

                // navigate("/");
            })
            .catch((err) => {
                toast.error('Wrong OTP!')
                setLoading(false);
            });
    };

    return (
        <div className='popup_wrapper'>
            <div className="popup_content relative">
                <ImCross onClick={() => setOpenPopup(false)} className='absolute right-0 top-0 mr-4 mt-4 h-4 w-4 cursor-pointer' />
                <div>
                    <>
                        <div className="bg-white text_bkash rounded-full mb-3 flex items-center py-2 justify-center">
                            <BsFillShieldLockFill size={30} />
                            <label
                                htmlFor="otp"
                                className="font-bold text-xl text-bkash inline-block ml-2"
                            >
                                Enter your OTP
                            </label>
                        </div>

                        <div className="otp_wrapper">
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                OTPLength={6}
                                otpType="number"
                                disabled={false}
                                autoFocus
                                className="opt_container"
                            ></OtpInput>
                        </div>
                        <button
                            onClick={onOTPVerify}
                            className="bg_bkash w-full flex gap-1 items-center justify-center py-2 mt-5 text-white rounded"
                        >
                            {loading && (
                                <ImSpinner9 size={15} className=" animate-spin" />
                            )}
                            <span>Verify OTP</span>
                        </button>
                    </>
                </div>
            </div>
        </div>
    );
};

export default OtpVerifyPopup;