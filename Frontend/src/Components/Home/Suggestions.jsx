import React, { useEffect, useState } from "react";

export const Suggestions = ({ posts }) => {

  return (
    <div className="hidden md:block m-2">
      <div className="bg-black p-4 rounded-lg shadow-md">
        <h2 className="font-semibold text-lg mb-4 text-white" >Sugerencias para ti</h2>
        {posts &&
          posts.map((suggestion, key) => (
            <div
              key={key}
              className="flex items-center space-x-4 mb-3"
            >
              <img
                src={suggestion.profilePhoto}
                alt={suggestion.user}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white">
                  {suggestion.user}
                </h3>
                <p className="text-sm text-gray-600">{suggestion.name}</p>
              </div>
              <button className="text-blue-600 font-semibold text-sm">
                Seguir
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
