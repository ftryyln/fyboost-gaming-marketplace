/**
 * Storage Utility Module
 * Handles all localStorage operations for FYBoost platform
 */

const ORDER_DATA_KEY = 'orderData';
const USER_DATA_KEY = 'userData';

/**
 * Save order data to localStorage
 * @param {object} orderData - Order data object {title, price}
 */
export function saveOrderData(orderData) {
    try {
        localStorage.setItem(ORDER_DATA_KEY, JSON.stringify(orderData));
    } catch (error) {
        console.error('Failed to save order data:', error);
    }
}

/**
 * Retrieve order data from localStorage
 * @returns {object|null} - Order data object or null if not found
 */
export function getOrderData() {
    try {
        const data = localStorage.getItem(ORDER_DATA_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Failed to retrieve order data:', error);
        return null;
    }
}

/**
 * Clear order data from localStorage
 */
export function clearOrderData() {
    try {
        localStorage.removeItem(ORDER_DATA_KEY);
    } catch (error) {
        console.error('Failed to clear order data:', error);
    }
}

/**
 * Save user data to localStorage
 * @param {object} userData - User data object
 */
export function saveUserData(userData) {
    try {
        localStorage.setItem(USER_DATA_KEY, JSON.stringify(userData));
    } catch (error) {
        console.error('Failed to save user data:', error);
    }
}

/**
 * Retrieve user data from localStorage
 * @returns {object|null} - User data object or null if not found
 */
export function getUserData() {
    try {
        const data = localStorage.getItem(USER_DATA_KEY);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Failed to retrieve user data:', error);
        return null;
    }
}

/**
 * Clear all FYBoost data from localStorage
 */
export function clearAllData() {
    try {
        localStorage.removeItem(ORDER_DATA_KEY);
        localStorage.removeItem(USER_DATA_KEY);
    } catch (error) {
        console.error('Failed to clear all data:', error);
    }
}
