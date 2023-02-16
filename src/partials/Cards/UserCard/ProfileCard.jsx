import React from 'react';
import { toast } from 'react-hot-toast';
import profileImage from '../../../images/user-36-01.jpg';

const ProfileCard = () => {
    const [address, setAddress] = React.useState('');

    const geolocation = navigator.geolocation;

    if (geolocation) {
        geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
                .then(response => response.json())
                .then(data => {
                    const city = data.address.town || data.address.city || data.address.county;
                    const state = data.address.state;

                    setAddress(`${city}, ${state}`);
                })
                .catch(error => toast.error(error));
        });
    } else {
        toast.error("Geolocation is not supported by this browser.");
    }

    return (
        <>
            <div className="border-bkash relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full px-4 flex justify-center">
                            <div className="relative">
                                <img
                                    alt="..."
                                    src={profileImage}
                                    className="shadow-xl rounded-full w-[150px] align-middle border-none -mt-16 "
                                />
                            </div>
                        </div>
                        <div className="w-full px-4 text-center">
                            <div className="flex flex-col justify-center py-4 lg:pt-4 pt-8">
                                <div className="mr-4 p-3 text-center">
                                    <span className="text-md font-bold text_bkash">Current Balance</span>
                                    <span className="text-xl font-bold block uppercase tracking-wide text_bkash">
                                        1000000 BDT
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-700 ">
                            Ayon Jodder
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-400"></i>{" "}
                            {
                                address ? address : 'Please allow location access to see your current location.'
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;