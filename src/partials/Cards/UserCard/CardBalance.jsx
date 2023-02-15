import React from 'react';

const CardBalance = () => {
    return (
        <div className={`relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded `}>
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-bold text-base text-center text-gray-700">
                            Available Balance
                        </h3>
                    </div>
                </div>
            </div>
            <>
                <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
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
                    </table>
                </div>
            </>

        </div>
    );
};

export default CardBalance;