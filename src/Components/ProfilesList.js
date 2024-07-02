import React from "react";
import Content from "./Content"; // Adjust the import path as per your file structure
import './Content.css'; // Ensure you import your CSS file

const users = [
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
        description: "This section is description of DSA.",
        readMore:
            "https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/",
    },
    {
        name: "Web Dev",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
        description: "This section is description of web dev",
        readMore: "https://www.w3schools.com/whatis/",
    },
    // Add more users as needed
];

function ProfilesList() {
    return (
        <div className="profiles-list">
            {users.map((user, index) => (
                <Content key={index} user={user} />
            ))}
        </div>
    );
}

export default ProfilesList;
