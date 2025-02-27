import React, { useState } from "react";

const EmojiSelector = () => {
  const [userName, setUserName] = useState("");
  const [emojiUrl, setEmojiUrl] = useState(
    "https://api.dicebear.com/9.x/adventurer/svg?seed=d"
  );
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleAvatarChange = () => {
    if (userName.trim() === "") {
      alert("Username cannot be empty");
      return;
    }
    const newAvatarUrl = `https://api.dicebear.com/9.x/adventurer/svg?seed=${encodeURIComponent(
      userName
    )}`;
    setEmojiUrl(newAvatarUrl);
    setUsers([...users, { name: userName, avatarUrl: newAvatarUrl }]);
    setUserName("");
  };

  const handleDelete = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen p-6">
      {/* Section 1 */}
      <div className="bg-white p-6 rounded-xl shadow-md w-96 flex flex-col items-center mb-6">
        <img src={emojiUrl} alt="emoji" className="w-36 h-36 rounded-lg mb-4" />
        <div className="w-full">
          <label className="block mb-2 text-lg">Name</label>
          <input
            type="text"
            value={userName}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            className="w-full p-3 border rounded-lg mb-4"
          />
          <button
            onClick={handleAvatarChange}
            className="w-full p-3 bg-orange-500 text-white rounded-lg hover:opacity-85"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-96 flex flex-col space-y-4">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white p-4 flex items-center rounded-lg shadow-md justify-between"
          >
            <div className="flex items-center">
              <img
                src={user.avatarUrl}
                alt={user.name}
                className="w-16 h-16 rounded-lg mr-4"
              />
              <h3 className="text-lg font-semibold">{user.name}</h3>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="text-red-500 text-xl"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiSelector;
