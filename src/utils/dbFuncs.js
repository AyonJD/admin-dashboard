import { db } from "../Config/firebase.config";
import { useState } from "react";
import { toast } from "react-hot-toast";

// Firestore imports
import { doc, setDoc, collection, getDocs, updateDoc, getDoc } from "firebase/firestore";
import "firebase/firestore";

// Add user to firestore
export const addUser = async (uuid, data) => {
    try {
        await setDoc(doc(db, "user", uuid), {
            data
        });
        toast.success('Data submitted successfully!');
    } catch (error) {
        // console.log(error);
    }
}

// Get user from firestore
export const getAllUser = async () => {
    const querySnapshot = await getDocs(collection(db, "user"));

    return new Promise(resolve => {
        const users = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push(data);
        });
        resolve(users);
    }).then(users => {
        const filterUser = users.filter(user => user.data.role !== 'admin');
        return filterUser;
    });
}

// Get user by phone number
export const getUserByPhone = async (phone) => {
    const querySnapshot = await getDocs(collection(db, "user"));

    return new Promise(resolve => {
        const users = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push(data);
        });
        resolve(users);
    }).then(users => {
        const filterUser = users.find(user => phone === user.data.phone);
        console.log(filterUser)
        return filterUser;
    });
}

// Get user by uudi
export const getUserByUuid = async (uuid) => {
    const querySnapshot = await getDocs(collection(db, "user"));

    return new Promise(resolve => {
        const users = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            users.push(data);
        });
        resolve(users);
    }).then(users => {
        const filterUser = users.find(user => user.data.userUuid === uuid);
        return filterUser;
    });
}

// Update user
export const updateUser = async (uuid, data) => {
    try {
        await updateDoc(doc(db, "user", uuid), {
            data
        });
        toast.success('Data updated successfully!');
    } catch (error) {
        toast.error('Something went wrong!');
        console.log(error);
    }
};