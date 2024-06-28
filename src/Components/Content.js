import { useState } from "react";
import './Content.css';
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
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
    },
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
    },
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
    },
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
    },
    {
        name: "DSA",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-fvR_E5N6E_Hs2vT6YoDysMBqXbC3h4lAg&s",
        imageSize: 300,
    },
];

function Content({ user }) {
    const [isClicked, setIsClicked] = useState(false);

    const AddDescripton = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="profile-card">
            <div className="profile-img-container">
                <img
                    className="profile-image"
                    src={user.imageUrl}
                    alt={"Photo of " + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize,
                    }}
                />
                <h1 className="user">{user.name}</h1>
                <button onClick={AddDescripton}>Description</button>
                {isClicked && (
                    <div>
                        <p className="description">
                            {user.description}
                            <a
                                className="read-more"
                                href={user.readMore}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read More
                            </a>

                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

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
