import React, { useState } from 'react';

const SearchComponent = ({ currentPage }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({
    accommodations: [],
    attractions: [],
  });

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (currentPage === 'accommodations') {
      // ตัวอย่างการกรองข้อมูลที่พัก
      const filteredAccommodations = accommodationsData.filter(accommodation =>
        accommodation.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults({ ...searchResults, accommodations: filteredAccommodations });
    } else if (currentPage === 'attractions') {
      // ตัวอย่างการกรองข้อมูลสถานที่ท่องเที่ยว
      const filteredAttractions = attractionsData.filter(attraction =>
        attraction.name.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults({ ...searchResults, attractions: filteredAttractions });
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="ค้นหา..." 
        value={searchTerm} 
        onChange={(e) => handleSearch(e.target.value)} 
      />

      {currentPage === 'accommodations' && (
        <>
          <h2>ผลการค้นหาที่พัก:</h2>
          {searchResults.accommodations.map(accommodation => (
            <div key={accommodation.id}>{accommodation.name}</div>
          ))}
        </>
      )}

      {currentPage === 'attractions' && (
        <>
          <h2>ผลการค้นหาสถานที่ท่องเที่ยว:</h2>
          {searchResults.attractions.map(attraction => (
            <div key={attraction.id}>{attraction.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchComponent;
