# Code Challenge 1 Repository 

Welcome to the **JavaScript Code Challenge 1 Repository**! This repository contains solutions to three interactive coding challenges aimed at improving JavaScript skills while solving practical problems.

## Challenges Overview 

1. **Chai Bora Ingredient Calculator **  
2. **Boda Boda Ride Fare Estimator **  
3. **Mobile Money Transaction Fee Estimator **  

Each challenge is implemented using **Node.js** and the **readline module** for user interaction in a terminal environment.

---

## Challenge 1: Chai Bora Ingredient Calculator☕

### **Description**
This program calculates the ingredients required to prepare a specified number of **cups of Kenyan chai** based on a standard recipe.

### **Standard Recipe (Per Cup)**
- **Water:** 200 ml  
- **Milk:** 50 ml  
- **Tea Leaves:** 1 tablespoon  
- **Sugar:** 2 teaspoons  

### **How It Works**
1. Prompts the user to enter the number of cups of chai they want to prepare.
2. Validates the input.
3. Calculates the required amount for each ingredient.
4. Displays the results in a **formatted output**.


🔹 **Folder**: `chaiCalculator`  
🔹 **File**: `chai.js`  

---

### **Challenge 2: Boda Boda Ride Fare Estimator 🛵**
This challenge involves estimating the cost of a boda boda trip based on distance traveled.

#### **Fare Calculation Rules**
- **Base Fare**: KES 50 (applies to every ride)
- **Per Kilometer Charge**: KES 15 per km

#### **How It Works**
- The user enters the distance of their trip (in kilometers).
- The function calculates the total estimated fare.
- The results are displayed in a friendly format.


🔹 **Folder**: `bodaFareCalculator`  
🔹 **File**: `fare.js`  

---

### **Challenge 3: Mobile Money Transaction Fee Estimator 📱**
This challenge calculates transaction fees based on a simplified fee structure.

#### **Fee Structure**
- **1.5% of the amount sent**
- **Minimum Fee**: KES 10 (if 1.5% is below KES 10, charge KES 10)
- **Maximum Fee**: KES 70 (if 1.5% exceeds KES 70, charge KES 70)

#### **How It Works**
- The user enters the amount they want to send.
- The function calculates the correct transaction fee.
- The total amount to be debited is displayed.

# Project Structure 
Code-Challenge-1/
│── chaiCalculator/
│   ├── chai.js
│── bodaFareCalculator/
│   ├── fare.js
│── mobileMoneyEstimator/
│   ├── fee.js
│── README.md

# Author
Created by James Ivan
Github repository: https://github.com/FrostyJames/Code-Challenge-1
