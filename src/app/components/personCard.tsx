import React, { useState } from "react";

// Define Person interface directly in the component
interface Person {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  dob: {
    date: string;
    age: number;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
  };
  login: {
    password: string;
  };
  picture: {
    large: string;
  };
}

interface PersonProps {
  person: Person;
}

const PersonCard: React.FC<PersonProps> = ({ person }) => {
  const [activeCategory, setActiveCategory] = useState("profile");

  // Define different content sections
  const categoryContent = {
    profile: {
      title: "Hi, My name is",
      value: `${person.name.title} ${person.name.first} ${person.name.last}`,
      icon: "👤"
    },
    email: {
      title: "My email is",
      value: person.email,
      icon: "✉️"
    },
    birthday: {
      title: "My birthday is",
      value: `${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age} years)`,
      icon: "🎂"
    },
    address: {
      title: "My address is",
      value: `${person.location.street.number} ${person.location.street.name}`,
      icon: "📍"
    },
    phone: {
      title: "My phone number is",
      value: person.cell,
      icon: "📞"
    },
    password: {
      title: "My password is",
      value: person.login.password,
      icon: "🔒"
    }
  };

  // Type for our categories
  type CategoryKey = keyof typeof categoryContent;
  const categories = Object.keys(categoryContent) as CategoryKey[];

  return (
    <div className="flex flex-col items-center max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Profile Image and Info Section */}
      <div className="w-full bg-gray-50 py-8 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
          <img 
            src={person.picture.large} 
            alt={`${person.name.first} ${person.name.last}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center px-4">
          <p className="text-gray-500 text-lg mb-1">
            {categoryContent[activeCategory as CategoryKey].title}
          </p>
          <h2 className="text-gray-800 text-2xl font-bold">
            {categoryContent[activeCategory as CategoryKey].value}
          </h2>
        </div>
      </div>

      {/* Icons Bar */}
      <div className="w-full flex justify-around p-4 border-t">
        {categories.map((category) => (
          <button
            key={category}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeCategory === category 
                ? "bg-green-100 text-green-600 border-t-2 border-green-500" 
                : "text-gray-400 hover:text-green-600 hover:bg-green-50"
            }`}
            onMouseEnter={() => setActiveCategory(category)}
          >
            <span className="text-xl">{categoryContent[category].icon}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PersonCard;