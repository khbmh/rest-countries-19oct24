import { useState } from 'react';

function Country({ info }) {
  console.log(info);

  const [react, setReact] = useState(false);

  const giveReact = () => {
    setReact(!react);
  };

  return (
    <div>
      <div
        className={`p-4 m-3 border rounded-xl flex flex-col gap-3 ${
          react && 'bg-[#ff00483d]'
        }`}
        onDoubleClick={giveReact}
      >
        <h1 className="text-xl font-semibold pb-2">{info?.name?.common}</h1>
        <img
          src={info?.flags?.svg}
          className="max-w-[300px] mx-auto"
          alt="flagImage"
        />
        <div className="space-y-1 mt-2 opacity-[.8]">
          <p>
            Area: {info?.area}{' '}
            <span className="opacity-[.5]">
              km<sup>2</sup>
            </span>
          </p>
          <p>Population: {info?.population} </p>
          <p>Capital: {info?.capital} </p>
        </div>
        <img
          onClick={giveReact}
          className={`cursor-pointer w-10 ${
            react ? 'grayscale-0' : 'grayscale opacity-[.9]'
          }`}
          // src="https://cdn-icons-png.flaticon.com/128/4926/4926592.png"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/love-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--heart-valentine-romance-romantic-sign-symbols-illustrations-2676671.png?f=webp"
          alt="react"
        />
      </div>
    </div>
  );
}

export default Country;
