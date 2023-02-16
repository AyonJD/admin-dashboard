import React from 'react';

const CardAbout = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    // Function to get the window width in pixels
    function getWindowWidth() {
        return window.innerWidth;
    }

    // Listen for changes to the window size
    window.addEventListener("resize", function () {
        // Set the window width to the state
        setWindowWidth(getWindowWidth());
    });

    return (
        <>
            {/* <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-700">
                                Account Information
                            </h3>
                        </div>

                    </div>
                </div>
                {
                    windowWidth > 924 ? (
                        <>
                            <div className="block w-full overflow-x-auto">

                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Name
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Phone
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Account Number
                                            </th>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Akhama(NID)
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                Ayon Jodder
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                01920204818
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                01920204818
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                01920204818
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="block w-full overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Name : Ayon Jodder
                                            </th>

                                        </tr>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Phone :  01920204818
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Account Number :  01920204818
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="px-6 bg-gray-50 text-gray-500 align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                                Akhama(NID) :  01920204818
                                            </th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </>
                    )
                }

            </div> */}

<div className={`relative flex flex-col min-w-0 break-words bg_bkash mb-6 shadow-lg rounded text-white`}>
            <div className="rounded-t mb-0 px-4 py-3 custom_border">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                        <h3 className="font-bold text-center text-lg">
                            Account Information
                        </h3>
                    </div>
                </div>
            </div>
            <>
                <div className="block w-full overflow-x-auto px-4 py-2 text-center">
                    {/* <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light">
                            <tr>
                                <th className="px-6 bg-gray-50 text-bkash align-middle border border-solid border-gray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semiboldtext-md text-center">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-t-0 text-bkash px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 pt-1 text-center text-2xl font-bold block uppercase tracking-wide">
                                    1000000 BDT
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                        
                        <div className='w-fit mx-auto'>
                            <h1 className='text-left font-semibold'>Name: Ayon Jodder</h1>
                            <h1 className='text-left py-1 font-semibold'>Phone: +8801920204818</h1>
                            <h1 className='text-left font-semibold'>AC No: 3547568756867</h1>
                            <h1 className='text-left pt-1 font-semibold'>Akhama (NID): 75674567567</h1>
                        </div>
                </div>
            </>

        </div>
        </>
    );
};

export default CardAbout;