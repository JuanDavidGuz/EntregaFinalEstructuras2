import React from "react";

export const ProfileBar = () => {
  return (
    <>
      <div className="container mx-auto my-8 pl-60 bg-black">
        <div className="grid grid-cols-3 items-center ">
          <div className="flex col-span-1 justify-center ">
            <img
              src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-1024x682.jpg'
              alt="Profile Pic"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="col-span-2">
            <h1 className="text-2xl font-bold text-white">Username</h1>
            <div className="flex justify-between ">
              <span className="text-blue-700">Posts: 10</span>
              <span className="text-blue-700">Followers: 100</span>
              <span className="text-blue-700">Following: 50</span>
            </div>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              at aliquam nisl. Nam id lectus ut sem mollis molestie.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
