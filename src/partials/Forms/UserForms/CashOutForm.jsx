import React from 'react';

const CashOutForm = ({ title }) => {
    const bankList = [
        { id: 1, name: 'AB Bank Limited' },
        { id: 2, name: 'Agrani Bank limited' },
        { id: 3, name: 'Al Arafa Bank limited' },
        { id: 4, name: 'Al Bilad Bank' },
        { id: 5, name: 'Al Jazira Bank limited' },
        { id: 6, name: 'Al Raji Bank limited' },
        { id: 7, name: 'Al-Arafah Islami Bank Limited' },
        { id: 8, name: 'Alinma Bank limited' },
        { id: 9, name: 'Ansar VDP Unnayan Bank' },
        { id: 10, name: 'Bangladesh Commerce Bank Limited' },
        { id: 11, name: 'Bangladesh Development Bank Limited' },
        { id: 12, name: 'Bangladesh Krishi Bank' },
        { id: 13, name: 'Bank Asia limited' },
        { id: 14, name: 'Bank Muscat' },
        { id: 15, name: 'Bank Of Baroda' },
        { id: 16, name: 'Banque Saudi Fransi' },
        { id: 17, name: 'Bengal Commercial Bank Limited' },
        { id: 18, name: 'BRAC Bank Limited' },
        { id: 19, name: 'City Bank limited' },
        { id: 20, name: 'Datch Bangla Bank limited' },
        { id: 21, name: 'Dhaka Bank limited' },
        { id: 22, name: 'Eastern Bank Limited' },
        { id: 23, name: 'EBL Bank limited' },
        { id: 24, name: 'Export Import Bank of Bangladesh Limited' },
        { id: 25, name: 'First Security Islami Bank Limited' },
        { id: 26, name: 'HSBC Bank limited' },
        { id: 27, name: 'ICB Islamic Bank Limited' },
        { id: 28, name: 'IFIC Bank limited' },
        { id: 29, name: 'Indian Bank Limited' },
        { id: 30, name: 'International Finance Invest and Commerce Bank Limited' },
        { id: 31, name: 'Islami Bank Bangladesh Limited' },
        { id: 32, name: 'Jamnuna Bank Limited' },
        { id: 33, name: 'Janata Bank limited' },
        { id: 34, name: 'Karmashangosthan Bank' },
        { id: 35, name: 'Malaysia Bank limited' },
        { id: 36, name: 'MayBank Malaysia' },
        { id: 37, name: 'Mcash' },
        { id: 38, name: 'Meghna Bank Limited' },
        { id: 39, name: 'Mercantile Bank Limited' },
        { id: 40, name: 'Midland Bank Limited' },
        { id: 41, name: 'Modhumoti Bank Limited' },
        { id: 42, name: 'Mutual Trust Bank Limited' },
        { id: 43, name: 'Nagad' },
        { id: 44, name: 'National Bank Limited' },
        { id: 45, name: 'National Credit & Commerce Bank Limited' },
        { id: 46, name: 'NRB Commercial Bank Limited' },
        { id: 47, name: 'One Bank Limited' },
        { id: 48, name: 'Padma Bank Limited' },
        { id: 49, name: 'Palli Sanchay Bank' },
        { id: 50, name: 'POSB Bank' },
        { id: 51, name: 'POSB BANK SINGAPORE' },
        { id: 52, name: 'Prime Bank Limited' },
        { id: 53, name: 'Pubali Bank limited' },
        { id: 54, name: 'RASTRIYA BANIJYA BANK LTD' },
        { id: 55, name: 'Rocket' },
        { id: 56, name: 'Saudi International bank' },
        { id: 57, name: 'SBI BANK' },
        { id: 58, name: 'Shahjalal Bank limited' },
        { id: 59, name: 'Shahjalal Islami Bank Limited' },
        { id: 60, name: 'Social Islami Bank Limited' },
        { id: 61, name: 'Sonali Bank limited' },
        { id: 62, name: 'Soudhi Bank limited' },
        { id: 63, name: 'South Bangla Agriculture & Commerce Bank Limited' },
        { id: 64, name: 'Southeast Bank Limited' },
        { id: 65, name: 'SUNRISE BANK LIMITED' },
        { id: 66, name: 'The City Bank Limited' },
        { id: 67, name: 'The Premier Bank Limited' },
        { id: 68, name: 'Trust Bank Limited' },
        { id: 69, name: 'Union Bank Limited' },
        { id: 70, name: 'United Commercial Bank Limited' },
        { id: 71, name: 'UOB Bank limited' },
        { id: 72, name: 'Uttora Bank limited' },
    ]
    return (
        <div className="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0">
            <div className="rounded-t bg-white mb-0 px-6 pt-6">
                <div className="text-left">
                    <h6 className="text-gray-700 text-xl font-bold">{title}</h6>
                </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10">
                <form>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Bank Name
                                </label>
                                <select
                                    className="customInputClass border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    id="bank-select"
                                >
                                    <option value="">Select Bank</option>
                                    {bankList.map((bank) => (
                                        <option key={bank.id} value={bank.name}>
                                            {bank.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Account No
                                </label>
                                <input
                                    type="number"
                                    className="customInputClass border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    defaultValue="35465321654"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Amount to Cash Out
                                </label>
                                <input
                                    type="number"
                                    className="customInputClass  border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    defaultValue="000"
                                />
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="customInputClass border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    defaultValue="Jesse"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                                <button
                                    className="bg_bkash text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CashOutForm;