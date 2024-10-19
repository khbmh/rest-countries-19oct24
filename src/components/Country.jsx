function Country({ info }) {
  console.log(info);
  return (
    <div>
      <div className="p-4 m-3 border rounded-xl flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{info?.name?.common}</h1>
        <img src={info?.flags?.svg} className="max-w-[300px] mx-auto" alt="flagImage" />
      </div>
    </div>
  );
}

export default Country;
