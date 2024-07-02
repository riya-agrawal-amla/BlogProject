import React from 'react';
import { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Content.css';

const users = [
    {
        name: "Machine learning",
        imageUrl: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*cG6U1qstYDijh9bPL42e-Q.jpeg",
        imageSize: 400,
        description: "This section is description of DSA.",
        readMore: "https://www.javatpoint.com/machine-learning",
    },
    {
        name: "Web Development",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
        imageSize: 400,
        description: "This section is description of web dev",
        readMore: "https://www.tutorialspoint.com/website_development/index.htm",
    },
    {
        name: "Data Structures",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBmCfB4VyxGETCvmfGA8vPSg1YJpIhdEKOw&s",
        imageSize: 400,
        description: "This section is description of web dev",
        readMore: "https://www.javatpoint.com/data-structure-tutorial",
    },
    {
        name: "Artificial Intelligence",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGwC9NzgexSk5lx2eIM3KrwkG3cjEP4AQQA&s",
        imageSize: 400,
        description: "This section is description of web dev",
        readMore: "https://www.javatpoint.com/artificial-intelligence-ai",
    },
    {
        name: "OOPs",
        imageUrl: "https://miro.medium.com/v2/resize:fit:600/0*7zMicw-FfThCbN35.png",
        imageSize: 400,
        description: "This section is description of web dev",
        readMore: "https://www.javatpoint.com/java-oops-concepts",
    },
    {
        name: "Python",
        imageUrl: "https://media.licdn.com/dms/image/D5612AQF7GSp3l4pztQ/article-cover_image-shrink_720_1280/0/1686548640655?e=2147483647&v=beta&t=OM9KysTUVtwR6R_8MgIUiZE4VXr1tHGUyaJW3vPicpk",
        imageSize: 400,
        description: "This section is description of web dev",
        readMore: "https://www.tutorialspoint.com/python/index.htm",
    },
    // {
    //     name: "ASP.Net",
    //     imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1XXX9v8fQafLb9yOkHPezYaQZqeNPNIi7MA&s",
    //     imageSize: 400,
    //     description: "This section is description of web dev",
    //     readMore: "https://www.tutorialspoint.com/asp.net/index.htm",
    // },
];

function Content({ user }) {
    const [isClicked, setIsClicked] = useState(false);

    const toggleDescription = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div className="content" style={{ paddingTop: '30px' }}>
            <div className="profile-card">
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={user.imageUrl || ''}
                            alt={user.name}
                            className="rounded-lg card-img" 
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{user.name}</h2>
                        {user.description && (
                            <p className="card-description">{user.description}</p>
                        )}
                        <div className="card-actions justify-end">
                            {user.readMore && (
                                <a
                                    className="btn btn-secondary flex items-center"
                                    href={user.readMore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Read More <FaExternalLinkAlt className="ml-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
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
