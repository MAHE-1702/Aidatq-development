import React, { useState } from 'react';
import CategoryData from './CategoryData';
import { ChevronDownIcon, PencilIcon, MagnifyingGlassIcon, PhotoIcon, CheckCircleIcon, ChevronRightIcon, EyeIcon, TrashIcon } from '@heroicons/react/24/outline';

const DiningMenu = () => {
    const [openCategories, setOpenCategories] = useState([]); // Track open categories
    const [activeTab, setActiveTab] = useState("dining"); // Default is dining


    const handleCategoryClick = (category) => {
        if (openCategories.includes(category)) {
            // If the category is already open, remove it from the list
            setOpenCategories(openCategories.filter((cat) => cat !== category));
        } else {
            // Otherwise, add it to the list of open categories
            setOpenCategories([...openCategories, category]);
        }
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div>
            <div className=' h-32 mx-5 mt-5 border-red-300 border-[1px] rounded-md bg-white-400'>


            </div>
           

            <div className={`p-4 ${activeTab === "dining" ? "" : "hidden"}`}>
                <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300">
                    <div className="flex items-center  space-x-4">
                    <button
                    className={` py-2  text-lg font-medium ${activeTab === "dining" ? "  underline" : "text-black-700"}`}
                    onClick={() => handleTabClick("dining")}
                >
                    Dining Menu
                </button>
                <button
                    className={`px-4 py-2 text-lg font-medium ${activeTab === "charges" ? " text-orange-600 underline" : "text-black-700"}`}
                    onClick={() => handleTabClick("charges")}
                >
                    Charges
                </button>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-blue-600">
                        + Add Item
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row gap-5 p-4">
                    <div className="w-full lg:w-3/5 bg-gray-100 p-4 border border-gray-300 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-lg font-bold text-gray-800">Menu</h1>
                            <button className="px-4 py-2 text-orange-500 font-medium rounded-md">
                                + Add Category
                            </button>
                        </div>

                        <div className="bg-slate-200 py-2 -mx-4">
                            <h2 className="text-gray-400 px-4 text-md font-semibold">12 Categories</h2>
                        </div>

                        {/* Category Navbar */}
                        <div className="flex flex-col mb-4 gap-2">
                            {CategoryData.map((category, index) => (
                                <div key={index}>
                                    {/* Category Button */}
                                    <div className="text-md text-start font-normal px-4 py-2 justify-between text-black rounded-md flex items-center">
                                        <div className="flex flex-row items-center">
                                            <div
                                                onClick={() => handleCategoryClick(category.category)}
                                            >
                                                {category.category}
                                            </div>
                                            {/* Dropdown Arrow */}
                                            <div>
                                                <ChevronDownIcon
                                                    className={`h-3 w-3 mt-1 ml-4 transition-transform duration-200 ${openCategories.includes(category.category)
                                                        ? 'rotate-180'
                                                        : ''
                                                        }`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Display items below the selected category */}
                                    {openCategories.includes(category.category) && (
                                        <div className="pl-8">
                                            <ul className="list-disc">
                                                {category.items.map((item, itemIndex) => (
                                                    <ul
                                                        key={itemIndex}
                                                        className="mb-2 ml-10 text-sm flex justify-between"
                                                    >
                                                        <div className="font-normal text-slate-700">
                                                            <strong>{item.name}</strong> - ₹{item.price}
                                                        </div>
                                                        <div className="flex items-center space-x-4">
                                                            <PencilIcon
                                                                className="h-4 w-5 text-gray-500 hover:text-blue-700 cursor-pointer"
                                                                title="Edit"
                                                            />
                                                            <EyeIcon
                                                                className="h-4 w-5 text-gray-500 hover:text-green-700 cursor-pointer"
                                                                title="View"
                                                            />
                                                            <TrashIcon
                                                                className="h-4 w-5 text-red-500 hover:text-red-700 cursor-pointer"
                                                                title="Delete"
                                                            />
                                                        </div>
                                                    </ul>
                                                ))}
                                                <p className="mb-2 ml-10 text-xs font-semibold text-orange-400">
                                                    + Add new item
                                                </p>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="w-full lg:w-2/5 bg-gray-100 p-4 border border-gray-300 rounded-lg">
                        <div className="flex justify-between items-center">
                            <p className="text-start text-gray-800 font-medium">+ Add item</p>
                            <button className="px-5  py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700">
                                Publish
                            </button>
                        </div>

                        <hr className="my-4 border-gray-300" />
                        <div className='mb-36'>
                            <form className="space-y-4">
                                {/* First Row: Item Name and Menu Category */}
                                <div className="flex items-center space-x-4">
                                    {/* Item Name */}
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="itemName" className="text-sm font-xs text-gray-700 mb-1">
                                            Item Name
                                        </label>
                                        <input
                                            id="itemName"
                                            type="text"
                                            placeholder="Enter item name"
                                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>

                                    {/* Menu Category */}
                                    <div className="flex flex-col w-1/2">
                                        <label htmlFor="menuCategory" className="text-sm font-xs text-gray-700 mb-1">
                                            Menu Category
                                        </label>
                                        <select
                                            id="menuCategory"
                                            className="px-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Select category</option>
                                            {/* Add dynamic category options here */}
                                            <option value="Pizza">Pizza</option>
                                            <option value="Biryani">Biryani</option>
                                            <option value="Dessert">Dessert</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <label htmlFor="subCategory" className="text-sm font-xs text-gray-700 mb-1">
                                        Sub Category
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="subCategory"
                                            type="text"
                                            placeholder="Search"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                                        />
                                        {/* Search Icon */}
                                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-xs text-gray-700 mb-1">Food Type</label>
                                    <div className="flex gap-4 mt-2">

                                        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-green-100">
                                            {/* <LeafIcon className="h-5 w-5 text-green-500" /> */}
                                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                                                <CheckCircleIcon className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-sm text-gray-700 font-medium">Veg</span>
                                        </div>


                                        <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-red-100">
                                            {/* <FireIcon className="h-5 w-5 text-red-500" /> */}
                                            <div className="w-5 h-5 bg-red-500 flex items-center justify-center">
                                                <ChevronRightIcon className="h-4 w-4 text-white" />
                                            </div>
                                            <span className="text-sm text-gray-700 font-medium">Non-Veg</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="itemDescription" className="text-sm font-xs text-gray-700 mb-1">
                                        Item Description
                                    </label>
                                    <textarea
                                        id="itemDescription"
                                        rows="4"
                                        placeholder="Enter item description"
                                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="flex items-center space-x-6">
                                    {/* Base Price */}
                                    <div className="flex flex-col ">
                                        <label htmlFor="basePrice" className="text-sm font-xs text-gray-700 mb-1">
                                            Base Price
                                        </label>
                                        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                                            <span className="text-sm text-gray-700">Rs.</span>
                                            <input
                                                id="basePrice"
                                                type="number"

                                                className="ml-2 w-14  focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Preparation Time */}
                                    <div className="flex flex-col ">
                                        <label htmlFor="prepTime" className="text-sm font-xs text-gray-700 mb-1">
                                            Preparation Time
                                        </label>
                                        <input
                                            id="prepTime"
                                            type="text"
                                            placeholder="Add time"
                                            className="px-3 py-2 w-32 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col w-2/5 ">
                                    <label className="text-sm font-xs text-gray-700 mb-1">
                                        Item Image
                                    </label>
                                    <div className="flex items-center space-x-4 border border-gray-300 rounded-md py-7 px-5 cursor-pointer hover:bg-gray-100">
                                        <input
                                            id="itemImage"
                                            type="file"
                                            className="hidden"
                                            accept="image/*"
                                        />
                                        <div className="flex flex-col items-center text-sm text-gray-700">
                                            <PhotoIcon className="h-10 w-10 text-gray-400 mr-2" />
                                            <span>Choose Image</span>
                                            <p className="mt-1 text-xs text-gray-500">Image size must be under 5MB</p>
                                        </div>
                                    </div>

                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charges tab*/}
            <div className={`p-4 ${activeTab === "charges" ? "" : "hidden"}`}>
                {/* The content for Charges tab */}
                <div className="text-gray-500 text-center">
                    <p>No content available for Charges</p>
                </div>
            </div>
        </div>
    );
};

export default DiningMenu;